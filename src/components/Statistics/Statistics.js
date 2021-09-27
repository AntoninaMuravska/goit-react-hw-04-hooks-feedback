import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>Good: {good}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>
          Positive feedback: {good ? percentage + `%` : 0}
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
