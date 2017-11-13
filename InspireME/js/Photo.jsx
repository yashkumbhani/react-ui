import PropTypes from 'prop-types';
import React from 'react';

const Photo = (props) => (
  <div>
    <img className="photo-container" src={`/public/img/${props.quotes[props.photoIndex].poster}`}
    alt={props.quotes[props.photoIndex].author} />
    <span tabIndex={0}
          role="button"
          onClick={props.navigatePrevious}
          className= "arrow-previous">
          {"<"}
    </span>
    <span tabIndex={0}
          role="button"
          onClick={props.navigateNext}
          className= "arrow-next">
          {">"}
    </span>
  </div>
);

Photo.propTypes = {
  navigatePrevious : PropTypes.func.isRequired,
  navigateNext : PropTypes.func.isRequired,
  quotes: PropTypes.arrayOf(PropTypes.shape({quoteText: PropTypes.string, author: PropTypes.string, likes: PropTypes.number})),
  photoIndex: PropTypes.number
}

Photo.defaultProps = {
  quotes: [
    {
      author: 'A P J Abdul Kalam',
      quoteText: 'We should not give up and we should not allow the problem to defeat us.',
      poster: 'Dr.-APJ-Abdul-Kalam.jpg',
      quoteID: 'quoteID01'
    }
  ],
  photoIndex:0
}
export default Photo;
