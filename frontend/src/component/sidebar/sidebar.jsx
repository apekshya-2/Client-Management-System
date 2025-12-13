import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import './sidebar.scss';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>Client Mgt Sytm</span>
        </div>
        <hr/>
       
        <div className='bottom'>
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>

                <p className="title">LISTS</p>
                <li>
                    <Person3OutlinedIcon className='icon'/>
                    <span>Clients</span>
                </li>

               
                <li>
                    <LocalGroceryStoreOutlinedIcon className='icon'/>
                    <span>Products</span>
                </li>
                
                <li>
                    <CreditCardOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                
                
                <p className="title">CHARTS</p>
                <li>
                    <InsertChartOutlinedIcon className='icon'/>
                    <span>Stats</span>
                </li>
                
                <li>
                    <NotificationsActiveOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <DnsOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Setting</span>
                </li>

                <p className="title">USER INTERFACE</p>
                <li>
                    <ManageAccountsOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <CalendarMonthOutlinedIcon className='icon'/>
                    <span>Calender</span>
                </li>
                <li>
                    <DiamondOutlinedIcon className='icon'/>
                    <span>Helper</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
                
            </ul>
            </div>  
    </div>
  )
}

export default sidebar