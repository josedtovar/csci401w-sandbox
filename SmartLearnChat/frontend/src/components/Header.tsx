import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
    const auth = useAuth();
    
    return (
        <AppBar sx={{ bgcolor: "black", position: "static", boxShadow: "none" }}>
            <Toolbar sx={{ display: "flex" }}>
                <Logo />
                <div>
                {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#ffffff"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
              <NavigationLink
                bg="#ffffff"
                textColor="black"
                to="/"
                text="logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#ffffff"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavigationLink
                bg="#ffffff"
                textColor="black"
                to="/signup"
                text="Signup"
              />
            </>
          )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;