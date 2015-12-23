import React from 'react';
import Comment from './Comment';

export default ({ data }) => (
  <div className="commentList">
    {data.map(comment =>
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    )}
  </div>
);
