import React from "react";
import StarRating from "./StarRating";
import Review from "./Review";

function ProductDetail(props) {
  const {name,description,rating,imgUrl} = props.product;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star" />);
  }
  let visible = true;
  function hideShow() {
    let reviews = document.getElementById('reviews');
    visible ? (reviews.style.display = "none") :  reviews.style.display = "block";
    visible ? visible = false : visible = true;
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
        <div className="caption">
          <h4><a href="#">{name}</a>
          </h4>
          <p>{description}
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right" onClick={hideShow}>{props.product.reviews.length} reviews</p>
          <p>
            <StarRating stars={rating} />
          </p>
          <div id="reviews">
            <Review keys={props.product.id} review={props.product.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
