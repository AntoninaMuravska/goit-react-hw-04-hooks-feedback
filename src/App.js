import { useState } from 'react';
import Section from './components/Section';
import Notification from './components/Notification';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const feedbackIncrement = event => {
    const name = event.target.textContent.toLowerCase();

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedbacks = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedbacks();
    const percentage = Math.round((good / totalFeedbacks) * 100);
    return percentage;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={feedbackIncrement}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedbacks() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedbacks()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
