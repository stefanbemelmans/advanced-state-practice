import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
//great example of reusablity, you may recognize this component from Homework 2 or something
export default class StarRating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: this.props.stars
        };
    }

    // onStarClick(nextValue, prevValue, name) {
    //     this.setState({rating: nextValue});
    // }

    render() {
        const { rating } = this.state;
        return (
            <div>

                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}

                />
            </div>
        );
    }
}
