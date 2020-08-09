import React from 'react';

import './AddBlog.css';

export default function AddBlog() {
  return (
    <form action="" method="post" class="add-blog-container">
      <input type="text" placeholder="Enter URL" value="" />
      <div className="footer-actions">
        <label for="file-input">Import OPML</label>
        <input type="file" id="file-input" />
        Categories: <a href="">All +1</a>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
