import { useState } from "react";

import Menu from "../../components/Menu";
import BlogHeader from "../../components/BlogHeader";
import BlogList from "../../components/BlogList";

import './Blog.css';

export default function Blog() {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <>
      <Menu />
      <main className="blog-main">
        <BlogHeader />
        <BlogList items={[{title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}, {title: 'Teste', description: 'testessss', type: 'post'}]} grid={isGrid} />
      </main>
    </>
  );
}
