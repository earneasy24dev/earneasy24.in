import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { useState } from "react";
import axios from "../../axios";
import { useTranslation } from "react-i18next";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { errorToast, successToast } from "../../utils/toast";

const ContactModalPageLoad = ({ opened, setOpened }) => {
  const [t, i18n] = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const sendEnquiry = async (e) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errorToast("Please enter a valid email");
      return;
    }
    await axios.post("createEnquiry", {
      name,
      whatsapp,
      email,
      message: "",
      language: i18n.language || "en",
    });
    setName("");
    setEmail("");
    setWhatsapp("");
    handleClose();
    return successToast(
      "Enquiry sent successfully. Our team will contact you shortly.",
      4000
    );
  };

  const handleClose = () => {
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
            <Typography variant="h6">Consultation call</Typography>

            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={sendEnquiry} id="contact-form">
            <div className="w-full my-4 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="name"
              >
                {t("contact_form.name")}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                placeholder={t("contact_form.name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="w-full my-4 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >
                {t("contact_form.email")}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder={t("contact_form.email")}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="w-full my-4 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="whatsapp"
              >
                {t("contact_form.whatsapp")}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="whatsapp"
                type="text"
                placeholder="+91"
                value={whatsapp}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setWhatsapp(e.target.value);
                  }
                }}
                required
                minLength={10}
                maxLength={10}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <button
            className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            form="contact-form"
          >
            {t("contact_form.submit")}
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactModalPageLoad;
