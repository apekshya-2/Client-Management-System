import React from 'react'
import './chart.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Last 6 months(Revenue) </div>
      <ResponsiveContainer width="100%"   aspect={2/1} >
      <BarChart width={730}
       height={250}
       margin={{top:0, right:0,left:0,bottom:0}}
        data={data}>

    <CartesianGrid
     strokeDasharray="3 3"
     stroke='gray'
     className='chatGrid' />

    <XAxis dataKey="name" />
    

    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#00B0FC" />
    <Bar dataKey="uv" fill="#A4DFFD" />
  </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart