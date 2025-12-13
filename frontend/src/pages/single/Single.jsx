import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <span className="editButton">Edit</span>

            <div className="item">
              <img src="/assets/person.jpg" alt="" className="itemImg" />

              <div className="details">
                <h1 className="itemTitle">Apeksha Dhungana</h1>
                <div className="detailItem">
                  <span className="itemkey">Email: </span>
                  <span className="itemValue">apekshya@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone: </span>
                  <span className="itemValue">+977 9843520317</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Address: </span>
                  <span className="itemValue">Balkot, Bhaktapur</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country: </span>
                  <span className="itemValue">Nepal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Users Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
