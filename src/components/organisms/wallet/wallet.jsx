import React, { useEffect, useState } from "react";
import WalletIcon from "../../../images/wallet.svg";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/Close";
import axios from "../../../axios";
import { errorToast, successToast } from "../../../utils/toast";
import { Link } from "react-router-dom";
import { useUser } from "../../../hooks/use-user";

const Wallet = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const { data: user, refetch } = useUser();
  const [earning, setEarning] = useState(0);
  const [amount, setAmount] = useState(null);
  const [rate, setRate] = useState(0);

  const minAmount = 75;
  const [kycForm, setKycForm] = useState({
    accountNo: "",
    name: "",
    bankName: "",
    ifsc: "",
    aadhar: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user) {
      const newUser = user;

      setEarning(Math.round(newUser?.rightCount * newUser?.rate));
      setRate(newUser?.rate);
    }
  }, [user]);

  useEffect(() => {
    if (user)
      axios
        .post("/getUserKyc", { userId: user?._id })
        .then((response) => {
          const kyc = response?.data;
          setKycForm({
            accountNo: kyc?.accountNumber,
            name: kyc?.holderName,
            bankName: kyc?.bankName,
            ifsc: kyc?.ifsc,
            aadhar: kyc?.aadhar,
          });
        })
        .catch((err) => { });
  }, [user]);

  const handleChange = (e) => {
    const stateCopy = { ...kycForm };
    stateCopy[e.target.name] = e.target.value;
    setKycForm(stateCopy);
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("/createKyc", {
        userId: user?._id,
        accountNumber: kycForm?.accountNo,
        holderName: kycForm?.name,
        bankName: kycForm?.bankName,
        ifsc: kycForm?.ifsc,
        aadhar: kycForm?.aadhar,
      })
      .then((response) => {
        if (response?.data?.kycDone) {
          successToast("Bank details updated successfully.");
          refetch();
          setOpen(false);
        }
      })
      .catch((err) => {
        errorToast("Something went wrong. Please try again.");
      });
  };

  const redeem = (e) => {
    e.preventDefault();

    if (user?.planName === "Test") {
      successToast(
        "You are on Test plan, please download our app and subscribe to a paid plan to withdraw the amount."
      );

      return;
    }

    if (earning < amount) {
      errorToast("Insufficient Balance.");
      return;
    }

    if (amount < minAmount) {
      errorToast("Minimum Payment is Rs. 75");
      return;
    }
    user?.remaining > 0 ? settleRemainingBalance() : sendWithdrawRequest();
  };

  const sendWithdrawRequest = () => {
    if (!user.kycDone) {
      errorToast("Please add a bank account to withdraw amount.");

      return;
    }

    axios
      .post("/withdrawAmount", {
        amount: amount,
      })
      .then((response) => {
        const paymentRequest = response.data;
        if (
          paymentRequest.message &&
          paymentRequest.message === "Pending Payment"
        ) {
          errorToast(
            "You already have a pending withdraw request. Please wait until all the pending requests gets cleared.",
            6000
          );
        } else {
          successToast("Withdraw request sent successfully.");
        }
        setAmount(0);
        refetch();
      })
      .catch((err) => {
        errorToast("Something went wrong. Please try again.");
      });
  };

  const settleRemainingBalance = () => {
    axios
      .post("/settleRemainingBalance", {
        amount: amount,
      })
      .then((response) => {
        successToast(
          `Rs. ${amount} successfully deducted from remaining balance`
        );
        setAmount(0);
        refetch();
      })
      .catch((err) => {
        errorToast("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="text-primary pt-10 lg:pt-20 h-screen flex flex-col items-center">
      <div className="pt-6 ">
        <div className="px-10 pt-5 flex flex-col bg-white shadow-lg rounded-2xl items-center gap-5">
          <div className="flex flex-col lg:flex-row items-center lg:gap-10 ">
            <img loading="lazy" src={WalletIcon} alt="" className="w-56 h-56" />
            <div className="flex flex-col items-center">
              <h1 className="font-cunia text-40 lg:text-54 text-deepBlue">
                WALLET
              </h1>
              <h2 className="font-cunia text-28 lg:text-32 text-lightPink mt-5">
                <span>₹&nbsp;</span>
                {earning}
              </h2>
            </div>
          </div>

          {user?.planName !== "Test" && user?.remaining > 0 && (
            <p className="font-cunia text-12 lg:text-16 text-deepBlue">
              Remaining balance to be paid -{" "}
              <span className="text-lightPink">
                <span>₹&nbsp;</span>
                {Math.ceil(user?.remaining)}
              </span>
            </p>
          )}

          <form
            className="flex flex-col lg:flex-row gap-5"
            onSubmit={(e) => redeem(e)}
          >
            <input
              type="number"
              className="px-3 py-3  text-center text-deepBlue font-sans bg-F5F8FF  border-deepBlue rounded-full shadow-md"
              placeholder="Enter Amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            {user?.planName !== "Test" && user?.remaining > 0 ? (
              <button className="bg-lightPink text-white font-sans rounded-full px-4 py-3 shadow-md border-2 hover:bg-white hover:border-lightPink hover:text-lightPink">
                Settle remaining balance
              </button>
            ) : (
              <button className="bg-lightPink text-white font-sans rounded-full px-4 py-3 shadow-md border-2 hover:bg-white hover:border-lightPink hover:text-lightPink">
                Withdraw
              </button>
            )}
          </form>
          <p className="font-bold">Minimum payment = Rs. 75</p>
          {user?.planName !== "Test" && user?.remaining > 0 && (
            <p className="font-semibold">
              You can withdraw your money after all the remaining balance is
              cleared.
            </p>
          )}
          <div
            className="font-sans items-center cursor-pointer"
            onClick={handleClickOpen}
          >
            <span className="text-deepBlue text-center">
              <AddCircleOutlineIcon className="text-lightPink" />
              &nbsp;&nbsp;Add Your Bank Account
            </span>
          </div>

          <Link
            to={"/d/withdraw-history"}
            className="rounded-full px-6 text-center py-2 font-poppinsbold text-15 text-white border bg-deepBlue hover:bg-brightYellow shadow-lg mb-5"
          >
            Withdraw History
          </Link>
        </div>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="flex flex-row justify-between gap-10 items-center pl-10 pr-3  pb-2">
          <div className="text-lightPink font-cunia pt-5 text-24 w-full">
            Add your bank details
          </div>
          <HighlightOffIcon
            className="text-coolGray hover:text-deepBlue cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <form onSubmit={(e) => submitForm(e)}>
          <DialogContent className="space-y-4">
            <input
              type="number"
              placeholder="Account No."
              className=" px-5 py-3 text-deepBlue font-sans bg-F5F8FF  border-deepBlue rounded-full shadow-md w-full"
              name="accountNo"
              value={kycForm?.accountNo}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Account Holder's Name"
              className=" px-5 py-3 text-deepBlue font-sans bg-F5F8FF  border-deepBlue rounded-full shadow-md w-full"
              name="name"
              value={kycForm?.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Bank Name"
              className=" px-5 py-3 text-deepBlue font-sans bg-F5F8FF  border-deepBlue rounded-full shadow-md w-full"
              name="bankName"
              value={kycForm?.bankName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="IFSC"
              className=" px-5 py-3 text-deepBlue font-sans bg-F5F8FF  border-deepBlue rounded-full shadow-md w-full"
              name="ifsc"
              value={kycForm?.ifsc}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Aadhaar No."
              className=" px-5 py-3 text-deepBlue font-sans bg-F5F8FF  border-deepBlue rounded-full shadow-md w-full"
              name="aadhar"
              value={kycForm?.aadhar}
              onChange={handleChange}
              required
            />
          </DialogContent>
          <DialogActions className="flex flex-row items-center lg:items-end mr-4 mb-2">
            <button
              type="submit"
              autoFocus
              className="bg-lightPink font-sans px-5 text-15 py-2 mt-4 border border-lightPink text-white rounded-full shadow-lg hover:bg-white hover:text-lightPink"
            >
              Submit
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Wallet;
