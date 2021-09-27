import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.btnGroupe}>
      {options.map((option, index) => {
        const label = option[0].toUpperCase() + option.slice(1);
        return (
          <li key={index}>
            <button
              type="button"
              name={label}
              className={s.button}
              onClick={onLeaveFeedback}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
