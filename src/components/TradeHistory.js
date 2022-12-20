import React from "react";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { tradeHstoryData } from "../data/tradeHistoryData";
import btc from "../assets/crypto/btc.png";
import eth from "../assets/crypto/eth.png";
import Chip from "./chip";

const TradeHistory = () => {
  const theme = useTheme();
  const cryptoIcons = {
    Bitcoin: (
      <Avatar alt="btc" src={btc} sx={{ height: "25px", width: "25px" }} />
    ),
    Ethereum: (
      <Avatar alt="eth" src={eth} sx={{ height: "25px", width: "25px" }} />
    ),
  };
  const rows = [
    "Asset",
    "Date",
    "Price",
    "Size Usdt",
    "Size Asset",
    "Pair",
    "Type",
    "Status",
  ];
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
                <col style={{ width: "5%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "13%" }} />
                <col style={{ width: "15%" }} />
              </colgroup>
              <TableHead>
                <TableRow>
                  {rows.map((item, index) => {
                    return (
                      <TableCell align="center" key={index}>
                        <Typography variant="body2" color="text.footnote">
                          {item}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {tradeHstoryData.slice(0, 11).map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "& td": { borderColor: theme.palette.border },
                      "& th": { borderColor: theme.palette.border },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {cryptoIcons[item.asset]}
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.main">
                        {item.date}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.main">
                        {item.price}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.main">
                        {item.sizeUsdt}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.main">
                        {item.sizeAsset}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.main">
                        {item.tradePair}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
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
                    <TableCell align="right">
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
            paddingBottom: "20px",
            color: "text.footnote",
            "&:hover": { color: "text.main" },
          }}
        >
          <Button variant="text" sx={{ backgroundColor: "border" }}>
            <Typography variant="body2" color="text.main">
              See More Transactions .....
            </Typography>
          </Button>
        </CardActions>
      </StyledCard>
    </>
  );
};

export default TradeHistory;
