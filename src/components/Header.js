import {
  Badge,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Toolbar>
        
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          MUI BLOG
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={6} color="error">
            <NotificationsActiveIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider sx={{ color: "white" }} />
      <Toolbar
        sx={{
          fontSize: "20px",
          justifyContent: "center",
          textTransform: "uppercase",
        }}
      >
        Express your thougts here in MUI blogs
      </Toolbar>
    </>
  );
}

export default Header;
