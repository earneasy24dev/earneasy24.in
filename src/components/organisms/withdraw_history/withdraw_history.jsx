import { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import axios from "../../../axios";
import moment from "moment";
import { successToast } from "../../../utils/toast";
import { useUser } from "../../../hooks/use-user";

const WithdrawHistory = () => {
  const { data: user } = useUser();

  const [requests, setRequests] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;

  useEffect(() => {
    if (user) {
      if (
        !user?.planName ||
        user?.planName === "" ||
        user?.planName === "Test"
      ) {
        return successToast(
          "You are on Demo plan, please buy a plan to withdraw amount."
        );
      }

      axios
        .post("/getWithdrawRequests", {
          userId: user?._id,
          page: page + 1,
          limit,
        })
        .then((response) => {
          const data = response.data;
          setTotalPages(data?.total);
          setRequests(data?.paymentRequests);
        })
        .catch((err) => { });
    }
  }, [user, page]);

  return (
    <div className="text-deepBlue pt-10 lg:pt-20 h-screen flex flex-col items-center relative">
      <div className="mt-10 lg:w-580 bg-white rounded-xl border-t-4 border-bgBlue pb-4 shadow-lg">
        <div className="bg-F5F8FF rounded-t-xl py-3 w-full text-deepBlue px-5 font-sans">
          <div className="font-cunia text-24">Withdraw Histrory</div>
          <div>Your recent payments will be displayed here.</div>
        </div>
        {requests?.map((request) => {
          return (
            <div
              key={request?._id}
              className="font-sans mx-5 py-5 flex flex-col divide-y divide-EFEEFB"
            >
              <div className="py-2">
                <div className="text-coolGray text-10">
                  {moment(request?.createdOn).format("DD MMM, YYYY HH:mm:ss a")}
                </div>
                <div className="flex flex-row justify-between items-center pt-1">
                  <div className="flex flex-col">
                    <div
                      className={`${request?.status === "Pending"
                          ? "text-brightYellow"
                          : "text-green"
                        } text-16 font-poppinsbold`}
                    >
                      {request?.status === "Pending"
                        ? "Processing"
                        : "Successful"}
                    </div>
                  </div>
                  <div className="mr-2 font-cunia text-lightPink text-20 lg:text-22">
                    Rs {request?.amount}
                  </div>
                </div>
                {request?.transactionId && (
                  <div className="font-poppinsbold text-coolGray mt-1">
                    Transaction Id - &nbsp;
                    <span className="font-regular text-lightPink text-12">
                      {request?.transactionId}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <div className="flex flex-row justify-between px-2">
          <div></div>
          <Pagination
            count={Math.ceil(totalPages / limit)}
            size="small"
            color="primary"
            page={page}
            onChange={(e, value) => {
              setPage(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WithdrawHistory;
