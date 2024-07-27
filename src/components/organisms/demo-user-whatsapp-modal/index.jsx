import { useEffect } from "react";
import { useState } from "react";
import { useUser } from "../../../hooks/use-user";
import { useWebsiteContent } from "../../../hooks/use-website-content";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import axios from "../../../axios";

export default function DemoUserWhatsappModal({ onComplete }) {
  const [opened, setOpened] = useState(false);
  const [number, setNumber] = useState("");

  const { data: websiteContent } = useWebsiteContent();
  const { data: user } = useUser();

  useEffect(() => {
    if (user) {
      const mobile = user?.mobile;

      if (!websiteContent?.showWhatsappScreen) return onComplete();

      if (user?.planName === "Test") {
        if (mobile && mobile !== "") {
          return onComplete();
        }
        setOpened(true);
      }
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("saveDemoWhatsappNumber", {
      whatsapp: number,
    });

    setOpened(false);
    onComplete();
  };

  const handleClose = (e, reason) => {
    if (reason === "escapeKeyDown" || reason === "backdropClick") return;
    setOpened(false);
  };

  return (
    <>
      <Dialog
        open={opened}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">
          <div className="flex items-center justify-between">
            <Typography variant="h6">Introduce yourself!</Typography>
          </div>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="contact-form">
            <div className="w-full my-4 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="whatsapp"
              >
                Enter your Whatsapp number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="whatsapp"
                type="text"
                placeholder="Your Whatsapp number"
                value={number}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setNumber(e.target.value);
                  }
                }}
                minLength={10}
                maxLength={10}
                required
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <button
            className="float-right mt-4 text-center px-12 py-2 text-sm bg-darkBlue text-white border-0 font-medium font-poppinsbold border-Gold my-2 shadow-xl rounded-full"
            type="submit"
            form="contact-form"
          >
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
