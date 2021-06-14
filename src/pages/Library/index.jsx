import { useState } from "react";
import { isMobile } from "react-device-detect";

import BlogList from "../../components/BlogList";
import Menu from "../../components/Menu";
import FloatMenu from "../../components/FloatMenu";

import './Library.css';

export default function Library() {
  const [mobile, setMobile] = useState(isMobile)

  return (
    <>
      <Menu />
      <ul className="tabs">
        <li>Read later<span>05</span></li>
        <li>Read lists</li>
        <li>Favorites</li>
      </ul>
      <main className="library-container">
        <section className="read-later">
          <BlogList items={[{title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}]} grid={true} />
        </section>
        {/* <section className="read-lists">
          <BlogList items={[{title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}]} grid={true} />
        </section> */}
        {/* <section className="favorites-list">
          <BlogList items={[{title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}]} grid={true} />
        </section> */}
      </main>
      {mobile && <FloatMenu />}
    </>
  );
}
