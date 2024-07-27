import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useEffect } from "react";
import axios from "../../../axios";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useStore } from "../../../store";
import { Telegram } from "@material-ui/icons";

const PaymentProofsModal = ({ opened, setOpened }) => {
  const websiteContent = useStore((state) => state.websiteContent);
  const setWebsiteContent = useStore((state) => state.setWebsiteContent);

  useEffect(() => {
    axios.get("getWebsiteContent").then((response) => {
      if (response?.data?.content) {
        setWebsiteContent(response?.data?.content);
      }
    });
  }, []);
  const handleClose = () => {
    setOpened(false);
  };

  return (
    <>
      <Dialog
        open={opened}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <div className="flex items-center justify-between">
            <Typography variant="h6">Payment Proofs</Typography>

            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-row gap-10 p-6">
            <a
              href={websiteContent?.instagram}
              target="_blank"
              without
              rel="noreferrer"
            >
              <InstagramIcon className="transform scale-150 text-bgBlue hover:text-lightPink" />
            </a>

            <a
              href={websiteContent?.facebook}
              target="_blank"
              without
              rel="noreferrer"
            >
              <FacebookIcon className="transform scale-150 text-bgBlue hover:text-lightPink" />
            </a>
            <a
              href={websiteContent?.twitter}
              target="_blank"
              without
              rel="noreferrer"
            >
              <TwitterIcon className="transform scale-150 text-bgBlue hover:text-lightPink" />
            </a>
            <a
              href={websiteContent?.telegram}
              target="_blank"
              without
              rel="noreferrer"
            >
              <Telegram className="transform scale-150 text-bgBlue hover:text-lightPink" />
            </a>
            <a
              href={websiteContent?.whatsappChannel}
              target="_blank"
              without
              rel="noreferrer"
            >
              <WhatsappIcon className="transform scale-150 text-bgBlue hover:text-lightPink" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentProofsModal;
