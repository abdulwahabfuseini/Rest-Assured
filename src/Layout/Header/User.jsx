import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const User = () => {
  const [openProfile, setOpenProfile] = useState(null);
  const open = Boolean(openProfile);

  const handleClick = (e) => {
    setOpenProfile(e.currentTarget);
  };

  const handleClose = () => {
    setOpenProfile(null);
  };

  return (
    <div className="relative">
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      {openProfile && (
        <Menu
          anchorEl={openProfile}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.15))",
              mt: 1,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
          <h1 className="text-xl">Account</h1></MenuItem>
          <Divider />
          <Link to="/sign-in">
            <MenuItem>
              <ListItemIcon>
                <Person fontSize="medium" />
              </ListItemIcon>
              <h1 className="text-lg">Login</h1>
            </MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="medium" />
              </ListItemIcon>
              <h1 className="text-lg"> Register</h1>
            </MenuItem>
          </Link>
          <Link to="/booking">
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="medium" />
              </ListItemIcon>
              <h1 className="text-lg"> Manage Booking</h1>
            </MenuItem>
          </Link>
        </Menu>
      )}
    </div>
  );
};

export default User;
