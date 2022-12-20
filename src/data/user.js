import profilePic from "../assets/profile-pic.webp";
export const user = {
  overview: {
    firstName: "Geofrey ",
    LastName: "Ntale",
    userName: "aleking",
    country: "Uganda",
    email: "ntalegeofrey@gmail.com",
    userID: "KIV22222",
    mobile: "256753194079",
    type: "PRO",
    dateJoined: "12 Dec 2022",
    balance: "3,583",
    profilePic: profilePic,
  },
  signInMethod: {
    emailMethod: {
      method: "Email Address",
      email: "ntalegeofrey@gmail.com",
      password: "ntale1234",
    },
    mobileMethod: {
      method: "Mobile",
      mobile: "256753194079",
      password: "ntale1234",
    },
    twofactorAuthentication: true,
  },
  accountBilling: {
    pendingBalance: 23,
    currency: "USD",
    paymentMethods: {
      cards: [
        {
          id: "1",
          type: "Visa",
          cardNumber: "4645768897799065",
          cvv: "234",
          expiry: "10/24",
          status: "active",
        },
        {
          id: "2",
          type: "Mastercard",
          cardNumber: "24589087766845322",
          cvv: "234",
          expiry: "10/24",
          status: "Blocked",
        },
      ],
      mobileMoney: [
        {
          id: "3",
          type: "mobileMoney",
          cardNumber: "256753194079",
          provider: "Airtel",
        },
      ],
    },
  },
  referals: {
    referalLink: "kivest/referal/ntalegeofrey",
    number: 10,
    referalEarnings: 50,
    referalBalance: 40,
  },
};
