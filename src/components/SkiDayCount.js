import React from 'react';
import PropTypes from 'prop-types';

import { MdTerrain } from 'react-icons/md'
import { TiWeatherSnow } from 'react-icons/ti'
import { FaCalendarAlt } from 'react-icons/fa'

import '../stylesheets/ui.scss';

const percentToDecimal = decimal => {
  return (`${decimal * 100}%`);
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}
export const SkiDayCount = ({ total=70, powder=20, backcountry=10, goal=100 }) => {

  return (
    <div className="ski-day-count">
      <div className="total-days">
        <span>{total} </span>
        <FaCalendarAlt />
        <span>days</span>
      </div>
      <div className="powder-days">
        <span>{powder} </span>
        <TiWeatherSnow />
        <span>days</span>
      </div>
      <div className="backcountry-days">
        <span>{backcountry} </span>
        <MdTerrain />
        <span>days</span>
      </div>
      <div className="goal" id="goal">
        <span>{calcGoalProgress(total, goal)} </span>
      </div>
    </div>
  );
};


// SkiDayCount.defaultProps = {
//   total: 50,
//   powder: 10,
//   backcountry: 15,
//   goal: 75
// };

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}
