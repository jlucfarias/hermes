import React from 'react';

import './BlogList.css';

const renderItem = (item) => {
  return (
    <li className="blog-item">
      <a href="">
        <label>{ item.postTitle || '' }</label>
        <img src={item.image || 'https://picsum.photos/200/200'} alt=""/>
      </a>
    </li>
  );
};

export default function BlogList(props) {
  return (
    <ul className="blog-list">
      {props.items.map(item => renderItem(item))}
    </ul>
  );
}
