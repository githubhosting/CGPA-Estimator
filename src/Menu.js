import * as React from "react";
import { DashboardMenuItem, Menu, MenuItemLink } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";
import CustomerIcon from "@material-ui/icons/People";
import BlogIcon from "@material-ui/icons/Edit";
import MenuIcon from "@material-ui/icons/Menu";
import UserIcon from "@material-ui/icons/Person";
import ManagerIcon from "@material-ui/icons/SupervisorAccount";
import CookIcon from "@material-ui/icons/Restaurant";
import SoupKitchenIcon from "@material-ui/icons/Kitchen";
import Private from "@material-ui/icons/Lock";
import Settings from "@material-ui/icons/Settings";
import Badge from "@mui/material/Badge";
import { MenuBook } from "@material-ui/icons";
import PostIcon from "@material-ui/icons/Book";
import LinkIcon from "@material-ui/icons/Link";
import CalculateIcon from "@mui/icons-material/Calculate";
import Marks from "@material-ui/icons/Grade";
import ImageIcon from "@mui/icons-material/Image";
export const MyMenu = (props) => (
  <Menu {...props}>
    <DashboardMenuItem />
    <MenuItemLink to="/calci" primaryText="Enter Marks" leftIcon={<Marks />} />
    <MenuItemLink
      to="/calculator"
      primaryText="Grade Calculator"
      leftIcon={<CalculateIcon />}
    />
    <MenuItemLink
      to="/otherlinks"
      primaryText="OtherLinks"
      leftIcon={<LinkIcon />}
    />
  </Menu>
);

// import * as React from "react";
// import { MenuItemLink, usePermissions } from 'react-admin';

// const Menu = ({ onMenuClick }) => {
//     const { permissions } = usePermissions();
//     return (
//         <div>
//             <MenuItemLink to="/posts" primaryText="Posts" onClick={onMenuClick} />
//             <MenuItemLink to="/comments" primaryText="Comments" onClick={onMenuClick} />
//             {permissions === 'admin' &&
//                 <MenuItemLink to="/custom-route" primaryText="Miscellaneous" onClick={onMenuClick} />
//             }
//         </div>
//     );
// }
