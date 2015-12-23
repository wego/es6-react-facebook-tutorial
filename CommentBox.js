import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data || [] };
  }

  handleCommentSubmit(comment) {
    const comments = this.state.data;
    const newComments = comments.concat([comment]);
    comment.id = Date.now();
    this.setState({ data: newComments });
    // TODO: send to API
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={(comment) => this.handleCommentSubmit(comment)} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  data: PropTypes.array,
};

export default CommentBox;
