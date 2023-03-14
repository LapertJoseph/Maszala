import React from "react";
import { useAuth } from "../../context";
import BasicButtons from "../../ui/button";

const Logout = () => {

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <BasicButtons label="Logout" onClick={handleLogout} type='onClick'/>
    </div>
  );
};

export default Logout;
