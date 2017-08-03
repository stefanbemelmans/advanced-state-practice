import React from "react";
import StarRating from "./StarRating";
export default function Review(props){
  props.review.map(x => {
    return (
      <div key={props.keys}>
        <p>{x.description}</p>
        <StarRating stars={x.rating} />
      </div>

      );
    })
  }
