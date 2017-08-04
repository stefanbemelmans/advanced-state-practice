import React from "react";
import StarRating from "./StarRating";
export default class Review extends React.Component {
  constructor(props){
    super(props);
    this.setState({
      visible: false
    })
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    let rev = document.getElementById('reviews');

    this.state.visible ? rev.style.display = 'none' : rev.style.display = 'block';
    this.setState({ visible: !this.state.visible})
     }

  render() {
    let revNum = this.props.reviews.length > 1 ? 'reviews' : 'review';

  let reviews = this.props.reviews.map(x => {
      return (
        <div key={this.props.keys}>
          <p>{x.description}</p>
          <StarRating stars={x.rating} />
        </div>
      );
    })

    return(
      <div>
        <StarRating stars={this.props.rating} /> <p onClick={(e) => this.onClick}>{revNum}</p>
        <div id='reviews'>{reviews}</div>
      </div>

    )

  }
}
