import React, { useState } from "react";

import Menu from "../../components/Menu";

import './Settings.css';

export default function Settings() {
  return (
    <>
      <Menu />
      <main className="settings-main">
        <div className="general-settings">
          <h2>General</h2>
          <ul>
            <li>
              <label>Language</label>
              <select>
                <option>English</option>
                <option>Portuguese</option>
              </select>
            </li>
            <li>
              <label>Theme</label><span>Sunshine</span>
            </li>
            <li>
              <label></label><span>Import</span>
            </li>
            <li>
              <label></label><span>Export</span>
            </li>
            <li>
              <label>Update Frequency</label><span>Daily</span>
            </li>
            <li>
              <label>Update Categories</label><span>All</span>
            </li>
          </ul>
        </div>
        {/* <div className="products-pricing">
          <h2>Products</h2>
        </div> */}
      </main>
    </>
  );
}
