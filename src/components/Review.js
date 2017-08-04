import React from "react";
import StarRating from "./StarRating";
export default class Review extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    let rev = document.getElementById('reviews');

    this.state.visible ? rev.style.display = 'none' : rev.style.display = 'inline';
    this.setState({ visible: !this.state.visible})
     }

  render() {
    
    let revNum = this.props.reviews.length > 1 ? 'reviews' : 'review';
    let display = {
      display: 'none'
    }
      let reviews = this.props.reviews.map((x,i) => {
          return (
            <div key={i}>
              <p>{x.description}</p>
              <StarRating stars={x.rating} />
            </div>
          );
        })
      return(
        <div className="indReviews">
          <StarRating stars={this.props.rating} /> <p onClick={this.onClick}>{this.props.reviews.length} {revNum}</p>
          <div id='reviews' style={display}>{reviews}</div>
        </div>

    )

  }
}
