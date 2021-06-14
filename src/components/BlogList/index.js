import React from 'react';

import './BlogList.css';

const renderDescription = (description, show = false) => {
  if (show)
    return <p>{ description || '' }</p>

  return <></>
}

const renderItem = (item, grid = true) => {
  return (
    <li className="blog-item">
      <a href={`/${item.type || ''}`}>
        <img src={item.image || 'https://picsum.photos/200/200'} alt=""/>
      </a>
      <div className="title-container">
        <label>{ item.title || '' }</label>
        {renderDescription(item.description, !grid)}
      </div>
    </li>
  );
};

export default function BlogList({ items, grid }) {
  return (
    <ul className={`blog-list${grid ? ' grid' : ''}`}>
      {items.map(item => renderItem(item, grid))}
    </ul>
  );
}
