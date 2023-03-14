import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import XhttpRequest from "../utils/xhttprequest";
import useStore from "../store";
import { notifSuccess, notifError } from "../ui/notif";
import Jwt from "../utils/Jwt";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const token = useStore((state) => state.token);
  const setToken = useStore((state) => state.setToken);
  const navigate = useNavigate();

  /**
   * Authentification handler
   * @param {object} param0 Email and password
   * @returns {void}
   */
  const login = async ({ email, password }) => {
    try {
      const result = await XhttpRequest.post("/user/auth", { email, password });
      if (result && result.data.success === true) {
        setToken(result.data.token);
        localStorage.setItem("token", result.data.token);
        setUser(Jwt.parse(result.data.token));
        notifSuccess("Connexion réussie");
        navigate("/home");
      } else {
        notifError("Error");
      }
    } catch (error) {
      notifError(error);
    }
  };

  /**
   * logout handler
   * @returns {void}
   */
  const logout = async () => {
    try {
      await XhttpRequest.get("/user/auth/logout");
      setUser();
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  /**
   * Check login Status handler
   * @return {void}
   */
  const checkLoginStatus = async () => {
    try {
      const { data } = await XhttpRequest.get("/user/auth");
      console.log(data.success, "checkLoginStatus");
      setUser(data.success);
    } catch (error) {
      console.log(error.message);
      navigate("/");
    }
  };

  useEffect(() => {
    const decoded = Jwt.parse(localStorage.getItem("token"));
    setUser(decoded);
    // checkLoginStatus();
  }, [token]);

  const value = {
    user,
    login,
    logout,
    checkLoginStatus,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
