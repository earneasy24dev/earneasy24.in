import { useEffect, useState } from "react";
import axios from "../../../axios";
import moment from "moment";
import Linkify from "react-linkify";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("/getNotifications")
      .then((response) => {
        const data = response.data;
        setNotifications(data?.notifications);
      })
      .catch((err) => { });
  }, []);

  return (
    <div className="text-deepBlue pt-10 lg:pt-10 lg:pb-20 bg-bgWhite h-screen flex flex-col gap-4 items-center relative">
      <div className="my-10 lg:w-580 bg-white rounded-xl border-t-4 border-bgBlue pb-4 shadow-lg">
        <div className="bg-F5F8FF rounded-t-xl py-3 w-full text-deepBlue px-5 font-sans">
          <div className="font-cunia text-24">Notifications</div>
        </div>
        <div className="font-sans mx-5 py-5 flex flex-col divide-y divide-EFEEFB h-[80vh] overflow-auto">
          {notifications?.map((notification) => {
            return (
              <div className="py-2">
                <div className="text-coolGray text-10">
                  {moment(notification?.createdOn).format(
                    "DD MMM, YYYY HH:mm:ss a"
                  )}
                </div>

                <div className="flex flex-col my-1">
                  <div className="text-deepBlue text-16 font-poppinsbold">
                    {notification?.title}
                  </div>
                </div>
                <div className="font-sans text-deepBlue text-13 mt-1">
                  <Linkify>{notification?.message}</Linkify>
                  {notification?.image && (
                    <div>
                      <a href={notification?.image} target="_blank">
                        <img
                          src={notification?.image}
                          className="w-full max-h-48 object-contain"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="flex flex-row justify-between px-2">
          <div></div>
          <Pagination count={10} size="small" color="primary" />
        </div> */}
      </div>
      {/* <div className="text-white">marginbottom</div> */}
    </div>
  );
};

export default Notifications;
