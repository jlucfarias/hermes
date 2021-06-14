import { useState } from "react";
import { isMobile } from "react-device-detect";

import Menu from "../../components/Menu";
import FloatMenu from "../../components/FloatMenu";

import './Settings.css';

export default function Settings() {
  const [mobile, setMobile] = useState(isMobile)

  return (
    <>
      <Menu />
      <main className="settings-main">
        <section className="general-settings">
          <h2>General</h2>
          <ul>
            <li>
              <label for="language">
                <span>Language</span>
                <select id="language">
                  <option>English</option>
                  <option>Portuguese</option>
                </select>
              </label>
            </li>
            {/* <li>
              <label>Theme</label>
              <select>
                <option>Sunshine</option>
              </select>
            </li> */}
            <li>
              <label>
                <span>Update Frequency</span>
                <select>
                  <option>Daily</option>
                </select>
              </label>
            </li>
            <li>
              <label>
                <span>Update Categories</span>
                <select>
                  <option>All</option>
                </select>
              </label>
            </li>
            <li className="inline">
              <a href="/">Import</a>
            </li>
            <li className="inline">
              <a href="/">Export</a>
            </li>
          </ul>
        </section>
      </main>
      {mobile && <FloatMenu />}
    </>
  );
}
