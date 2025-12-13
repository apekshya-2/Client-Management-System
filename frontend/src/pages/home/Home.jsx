import React from 'react'
import './home.scss';
import Sidebar from '../../component/sidebar/Sidebar.jsx';
import Navebar from '../../component/navbar/navbar.jsx';
import Widget from '../../component/widget/Widget.jsx';
import Featured from '../../component/featured/Featured.jsx';
import Chart from '../../component/chart/Chart.jsx';
import List from '@mui/material/List';

const home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navebar />
            <div className='widgets'>
              <Widget type="customer" />
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>
            <div className="charts">
              <Featured />
              <Chart />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <List />
            </div>

        </div>
        </div>
     
  )
}

export default home