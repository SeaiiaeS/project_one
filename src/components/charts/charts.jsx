import React, { PureComponent } from 'react';
import "./charts.scss";
import {LineChart, Line, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import caretDown from "@/assets/svg's/caret-down.svg";

const data = [
  {
    SignUps: 40,
    PageViews: -30,
    Clicks: 20,
  },
  {
    SignUps: 50,
    PageViews: 30,
    Clicks: 60,
  },
  {
    SignUps: 0,
    PageViews: 60,
    Clicks : 20,
  },
  {
    SignUps: -40,
    PageViews: 20,
    Clicks: -30,
  },
  {
    SignUps: -20,
    PageViews: -40,
    Clicks: -35,
  },
  {
    SignUps: 40,
    PageViews: -30,
    Clicks: 30,
  },
  {
    SignUps: 50,
    PageViews: 20,
    Clicks: 50,
  },
];

const legendData = [
  { value: 'Clicks', type: 'square', color: '#fbcf71'  },
  { value: 'Page Views', type: 'square', color: '#1f7bb6' },
  { value: 'Sign Ups', type: 'square', color: '#01aaaa' }
]

export default class Chart extends PureComponent {
  render() {
    return (
      <div className='chart'>
        <div className='chart__header'>
          <h4 className='chart__title'>Medias Staats</h4>
          <div className='chart__box'>
            <p className='chart__dataSelector'>Last week</p>
            <img className='chart__caretDown' src={caretDown} alt="down" />
          </div>
        </div>
        <ResponsiveContainer width="99%" aspect={1.5}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 0, left: -10 }}
        >
          <CartesianGrid vertical={false} horizontalFill={['#2a2a2a']}/>
          <YAxis tick={{fill: '#fff',}} tickCount={7}  domain={[-60, 60]}/>
          <Tooltip />
          <Legend align='right' iconType="square" payload={legendData} wrapperStyle={{padding:"10px 0 0 0"}} formatter={(value, entry, index)=>{
            return <span className="chart__colorClass">{value}</span>
          }}/>
          <Line type="natural" dataKey="SignUps" stroke="#01aaaa" strokeWidth={3} dot={{strokeWidth:5}} />
          <Line type="natural" dataKey="PageViews" stroke="#1f7bb6" strokeWidth={3} dot={{strokeWidth:5}} />
          <Line type="natural" dataKey="Clicks" stroke="#fbcf71"  strokeWidth={3} dot={{strokeWidth:5}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
  }
}
