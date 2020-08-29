import React, { useState } from "react";

import BlogList from "../../components/BlogList";
import Menu from "../../components/Menu";

import './Library.css';

export default function Library() {
  return (
    <>
      <Menu />
      <main className="library-container">
        <section className="read-later">
          <header>
            <h2>Read later <span>04</span></h2>
          </header>
          <BlogList items={[{title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}]} grid={true} />
        </section>
        <section className="read-lists">
          <h2>Read lists</h2>
          <BlogList items={[{title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}]} grid={true} />
        </section>
        <section className="favorites-list">
          <header>
            <h2>Favorites <span>04</span></h2>
          </header>
          <BlogList items={[{title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}]} grid={true} />
        </section>
      </main>
    </>
  );
}
