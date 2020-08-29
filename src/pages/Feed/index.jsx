import React, { useState } from "react";

// import AddBlog from "../components/AddBlog";
import BlogList from "../../components/BlogList";
import Fab from "../../components/FAB";
import Menu from "../../components/Menu";
// import Modal from "../components/Modal";

import './Feed.css';

export default function Feed() {
  // const [showBlogModal, setShowBlogModal] = useState(false);
  // const [showCategoriesModal, setShowCategoriesModal] = useState(false);

  // function showModal(modalname) {
  //   if (modalname === 'blog') {
  //     setShowBlogModal(true);
  //   } else if (modalname === 'categories') {
  //     setShowCategoriesModal(true);
  //   }
  // }

  return (
    <>
      <Menu />
      <main className="feed-main">
        {false ?
          <div className="empty-feed">Your Library is empty</div>
        :
          <>
            <section className="feed-filter">
              Tudo | Categoria
            </section>
            <BlogList items={[{title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}, {title: 'Teste', description: 'testessss'}]} grid={true} />
          </>
        }
      </main>
      <Fab onClick={() => /*showModal('blog')*/{}}>
        +
      </Fab>
      {/* {showBlogModal ? <Modal><AddBlog showModal={[showCategoriesModal, () => showModal('categories')]} /></Modal> : null} */}
    </>
  );
}
