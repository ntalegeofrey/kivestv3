import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Avatar,
  Box,
  CardContent,
  IconButton,
  TablePagination,
  TableSortLabel,
  Typography,
  useTheme,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import React, { useState } from "react";
import btc from "../assets/crypto/btc.png";
import eth from "../assets/crypto/eth.png";
import { tradeHstoryData } from "../data/tradeHistoryData";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";
import Chip from "./chip";

export function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const FullTradeHistory = () => {
  const theme = useTheme();
  const cryptoIcons = {
    Bitcoin: (
      <Avatar alt="btc" src={btc} sx={{ height: "25px", width: "25px" }} />
    ),
    Ethereum: (
      <Avatar alt="eth" src={eth} sx={{ height: "25px", width: "25px" }} />
    ),
  };
  const columns = [
    "Asset",
    "Date",
    "Price",
    "Size (usdt)",
    "Size (Asset)",
    "Pair",
    "Type",
    "Status",
  ];
  const [rowData, setRowData] = useState(tradeHstoryData);
  const [orderDirection, setOrderDirection] = useState("asc");

  const sortArray = (arr, orderBy) => {
    switch (orderBy) {
      case "asc":
      default:
        return arr.sort((a, b) =>
          a.returns > b.returns ? 1 : b.returns > a.returns ? -1 : 0
        );
      case "desc":
        return arr.sort((a, b) =>
          a.returns < b.returns ? 1 : b.returns < a.returns ? -1 : 0
        );
    }
  };

  const handleSortRequest = () => {
    setRowData(sortArray(tradeHstoryData, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - tradeHstoryData.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Trade History"
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />
        <CardContent>
          <TableContainer component={Paper} elevation={0}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <colgroup>
                <col style={{ width: "1%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "5%" }} />
                <col style={{ width: "8%" }} />
                <col style={{ width: "5%" }} />
                <col style={{ width: "5%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <TableHead>
                <TableRow>
                  {columns.map((item, index) => {
                    return (
                      <TableCell align="center" key={index}>
                        <Typography variant="body2" color="text.footnote">
                          {item}
                        </Typography>
                      </TableCell>
                    );
                  })}
                  <TableCell align="center" onClick={handleSortRequest}>
                    <TableSortLabel active={true} direction={orderDirection}>
                      <Typography variant="body2" color="text.footnote">
                        Returns (usdt)
                      </Typography>
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rowData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rowData
                ).map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "& td": { borderColor: theme.palette.border },
                      "& th": { borderColor: theme.palette.border },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      <Typography variant="body2" color="text.main">
                        {cryptoIcons[item.asset]}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2" color="text.main">
                        {item.date}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2" color="text.main">
                        {item.price}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2" color="text.main">
                        {item.sizeUsdt}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2" color="text.main">
                        {item.sizeAsset}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2" color="text.main">
                        {item.tradePair}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      {
                        <Chip
                          variant="body1"
                          textColor={
                            item.tradeType === "Buy"
                              ? "gradients.success.main"
                              : "gradients.error.main"
                          }
                          text={item.tradeType}
                          bgColor="white.main"
                        />
                      }
                    </TableCell>
                    <TableCell align="center">
                      {
                        <Chip
                          variant="body2"
                          textColor={
                            item.status === "complete"
                              ? "badgeColors.success.text"
                              : "badgeColors.warning.text"
                          }
                          text={item.status}
                          bgColor={
                            item.status === "complete"
                              ? "badgeColors.success.background"
                              : "badgeColors.warning.background"
                          }
                        />
                      }
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body2" color="text.main">
                        {item.returns}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow
                    sx={{
                      height: 53 * emptyRows,
                      "&:last-child td, &:last-child th": { border: 0 },
                      "& td": { borderColor: theme.palette.border },
                      "& th": { borderColor: theme.palette.border },
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={tradeHstoryData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default FullTradeHistory;
