import React from "react";
import { connect } from "react-redux";

function Do({ post, deletePost, history }) {
  const handleClick = () => {
    deletePost(post.id);
    history.push("/");
  };

  const postDetail = post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
      <div className="center">
        <button className="btn grey" onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );
  return <div>{postDetail}</div>;
}

const mapState = (state, ownProps) => {
  let id = ownProps.match.params.do_id;
  return {
    post: state.posts.find((post) => post.id === +id),
  };
};

const mapDispatch = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

export default connect(mapState, mapDispatch)(Do);
