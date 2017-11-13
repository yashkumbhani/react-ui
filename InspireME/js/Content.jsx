import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Content extends Component {
  state = {
    likes: this.props.quotes.map(quote =>quote.likes)
  }
  likeHandler = () =>{
    const likes = this.state.likes;
    likes[this.props.photoIndex] += 1;
    this.setState({likes});
  }
  render() {
    return (
      <div>
        <div className="liker-box">
          <span tabIndex={0} role="button" onClick={this.likeHandler} className="liker">❤  </span>
          <span className="number-of-likes">
            {this.state.likes[this.props.photoIndex]}</span>
        </div>
        <p className='text-container'>
          {this.props.quotes[this.props.photoIndex].quoteText}
        </p>
        <p className='author-text'>
          - {this.props.quotes[this.props.photoIndex].author}
        </p>
      </div>
    );
  }
}

Content.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({quoteText: PropTypes.string, author: PropTypes.string, likes: PropTypes.number})),
  photoIndex:PropTypes.number
};

Content.defaultProps = {
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
export default Content;
