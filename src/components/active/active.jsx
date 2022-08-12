import React, { PureComponent } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import "./active.scss";

const data02 = [
  { name: 'A1', value: 100, fill: '#fbcf71' },
  { name: 'A2', value: 65, fill: '#01a9a9'},
  { name: 'B1', value: 45, fill: '#1f7bb6'},
];

export default class Active extends PureComponent {

  render() {
    return (
      <div className='active'>
        <h3 className='active__title'>Active Medias</h3>
        <div className='active__diagrame'>
          <h3 className='active__count'>50</h3>
          <ResponsiveContainer width="99%" aspect={1.5}>
            <PieChart >
              <Pie data={data02} dataKey="value" innerRadius={"70%"} outerRadius={"100%"} fill="#82ca9d" stroke="none" startAngle={90} endAngle={480} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='active__infoWrapper'>
            <div className='active__infoList'>
              <p className='active__item active__item--top'>CTR</p>
              <p className='active__item'>
                <span className='active__outCircle'><span className='active__inCircle'></span></span> Total Views
              </p>
              <p className='active__item'>
                <span className='active__outCircle active__outCircle--green'><span className='active__inCircle'></span></span> Total Clicks
              </p> 
              <p className='active__item'>
                <span className='active__outCircle active__outCircle--blue'><span className='active__inCircle'></span></span> Signups
              </p>
            </div>
            <div className='active__valueList'>
              <p className='active__item active__item--top'>25%</p>
              <p className='active__item'>200</p>
              <p className='active__item'>65</p>
              <p className='active__item'>22</p>
            </div>
        </div>
      </div>
      
    );
  }
}