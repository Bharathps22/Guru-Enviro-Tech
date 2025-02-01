import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';

const Sidebar1 = () => {
    return (
        <Sidebar className='mt-1' collapsed={false} collapsedWidth="80px" breakPoint="md" style={{minHeight:"100vh",width:"250px"}} >
            <Menu
             menuItemStyles={{
                button: {
                  // the active class will be added automatically by react router
                  // so we can use it to style the active menu item
                  [`&.active`]: {
                    backgroundColor: '#13395e',
                    color: '#b6c8d9',
                    
                  },
                },
              }}
            >
                <SubMenu label="Pages" >
                    <MenuItem component={<Link to="/page1" />}>Page1 </MenuItem>
                    <MenuItem component={<Link to="/page2" />}> Page 2 </MenuItem>
                </SubMenu>
                <SubMenu label="Form">
                  <MenuItem component={<Link to="/customform"/>}>Sample Form 1</MenuItem>
                </SubMenu>
                <SubMenu label="Table">
                  <MenuItem component={<Link to="/format"/>}>Small Box</MenuItem>
                </SubMenu>
                <MenuItem component={<Link to="/" />}> Home </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
            
        </Sidebar>

        
    );
};

export default Sidebar1;
