import React, { Component, PropTypes } from 'react';
import marked from 'marked';

class Comment extends Component {
  rawMarkup() {
    return {
      __html: marked(this.props.children.toString(), { sanitize: true }),
    };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

Comment.propTypes = {
  children: PropTypes.node.isRequired,
  author: PropTypes.string.isRequired,
};

export default Comment;
