import React from 'react';

import './BlogHeader.css';

export default function BlogHeader() {
  return (
    <header className="blog-header">
      <img src="https://picsum.photos/70/70" alt=""/>
      <section className="header-content">
        <h2>Título</h2>
        <p>Descrição do blog</p>
      </section>
    </header>
  );
}
