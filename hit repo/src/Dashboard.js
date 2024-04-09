import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
// import 'react-pro-sidebar/dist/css'
// import './Dashboard.scss'
const Dashboard = () => {
  return (
    <div style={{ height:"92.3vh", display: "flex"}} >

      <Sidebar style={{backgroundColor:"#211b1b"}} width="175px">
        <Menu  menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? '#f5d9ff' : '#d359ff',
            backgroundColor: active ? '#eecef9' : undefined,
          };
      },
          }}>

               <SubMenu label="Charts" >
               <MenuItem component={<Link to="/users"></Link>}>Add Users </MenuItem>
               <MenuItem component={<Link to="/crud"></Link>}> <i className="fas fa-cog"></i>Users</MenuItem>

              </SubMenu>
         
          <SubMenu label="Home">
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/home" />}>About </MenuItem>
          <MenuItem>Contact </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
