import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Photo from './Photo';
import Content from './Content';

class ShowCard extends Component {
  state = {
    photoIndex: 0
  }
  navigatePrevious = () =>{
    if(this.state.photoIndex > 0){
      const previousIndex = this.state.photoIndex -1;
      this.setState({photoIndex:previousIndex})
    }
  }
  navigateNext = () =>{
    if(this.state.photoIndex < this.props.quotes.length -1){
      const nextIndex = this.state.photoIndex +1;
      this.setState({photoIndex:nextIndex})
    }
  }

  render() {
    return(
      < div className = "container" >
        < div className="photo-container">
          <Photo {...this.props}
            navigatePrevious = {this.navigatePrevious}
            navigateNext ={this.navigateNext}
            photoIndex = {this.state.photoIndex}
          />
        </div>
        < div className = "content-container"
            style={{'background-color':this.props.quotes[this.props.photoIndex].backgroundColor,
                    color: this.props.quotes[this.props.photoIndex].fontColor}}>
          <Content {...this.props}
            navigatePrevious = {this.navigatePrevious}
            navigateNext ={this.navigateNext}
            photoIndex = {this.state.photoIndex}/>
        < /div>
      </div >
  )
  }
}

ShowCard.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({quoteText: PropTypes.string, author: PropTypes.string, likes: PropTypes.number})),
  photoIndex:PropTypes.number
};

ShowCard.defaultProps = {
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

export default ShowCard;
