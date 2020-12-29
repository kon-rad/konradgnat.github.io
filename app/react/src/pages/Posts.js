import React from "react";
import Title from "../components/atoms/Title";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-12 posts__title">
          <Title>Articles</Title>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 md-offset-3">
          <h2>Latest Post:</h2>
          <div>latest post body</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 md-offset-3">
          <h2>All Posts:</h2>
          <div>all post body</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 md-offset-3">.col-md-3 .col-md-offset-3</div>
        <div class="col-md-3 md-offset-3">.col-md-3 .col-md-offset-3</div>
      </div>
    </div>
  );
};

export default Posts;
