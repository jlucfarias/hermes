import React from 'react';

import './AddCategory.css';

export default function AddCategory(props) {
  return (
    <div className="category-container">
      <div className="category-add-input">
        <input type="text" placeholder="Enter category name"/>
        <a href="">{false ? 'Edit' : 'Add'}</a>
      </div>
      <ul>
        {props.items.map(category => (
          <li>
            <div className="category">
              <input type="checkbox" name="categories" id={category.name}/>
              <label htmlFor={category.name}>{category.name}</label>
            </div>
            <div className="category-actions">
              <a href="">
                edit
              </a>
              <a href="">
                delete
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
