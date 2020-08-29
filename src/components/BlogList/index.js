import React from 'react';

import './BlogList.css';

const renderItem = (item, grid = true) => {
  return (
    <li className="blog-item">
      <a href="">
        <img src={item.image || 'https://picsum.photos/200/200'} alt=""/>
      </a>
      <div className="title-container">
        <label>{ item.title || '' }</label>
        {grid ? null : <p>{ item.description || '' }</p>}
      </div>
    </li>
  );
};

export default function BlogList(props) {
  return (
    <ul className={`blog-list${props.grid ? ' grid' : ''}`}>
      {props.items.map(item => renderItem(item, props.grid))}
    </ul>
  );
}
