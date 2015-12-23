import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

const initialData = [
  {
    'id': 1388534400000,
    'author': 'Pete Hunt',
    'text': 'Hey there!',
  },
  {
    'id': 1420070400000,
    'author': 'Paul O’Shannessy',
    'text': 'React is *great*!',
  },
];

ReactDOM.render(
  <CommentBox data={initialData} />, document.getElementById('content')
);
