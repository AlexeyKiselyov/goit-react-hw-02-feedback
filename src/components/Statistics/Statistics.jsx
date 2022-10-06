import PropTypes from 'prop-types';
// ======================
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h3>Statistics</h3>
      <p>Good:<span>{good}</span></p>
      <p>Neutral:<span>{neutral}</span></p>
      <p>Bad:<span>{bad}</span></p>
      <p>Total:<span>{total()}</span></p>
      <p>Positive feedback:<span>{positivePercentage()}%</span></p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired, 
}

