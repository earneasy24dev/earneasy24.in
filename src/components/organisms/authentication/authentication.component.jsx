import { createContext, useContext, useState, useEffect } from "react";
import ModuleSpinner from "../../molecules/module-spinner/module-spinner.component";
import axios from "../../../axios";
import { errorToast } from "../../../utils/toast";
import { useStore } from "../../../store";

const AuthenticationContext = createContext(null);

const Authentication = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    axios
      .get("/me")
      .then((response) => {
        setLoading(false);
        setAuthenticatedUser(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        setLoading(false);
        errorToast(err?.response?.data?.Comments);
      });
  }, []);

  if (loading) return <ModuleSpinner />;

  return (
    <AuthenticationContext.Provider value={authenticatedUser}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticationContext);

export default Authentication;
