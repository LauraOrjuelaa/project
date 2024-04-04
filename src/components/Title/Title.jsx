import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ text }) => {
  return (
    <div className="title-container">
      <h1 className="title-text">{text}</h1>
      <hr className="title-line"  />
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
