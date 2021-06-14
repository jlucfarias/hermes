import { useState } from "react";
import { isMobile } from "react-device-detect";

// import AddBlog from "../components/AddBlog";
import BlogList from "../../components/BlogList";
import Fab from "../../components/FAB";
import Menu from "../../components/Menu";
import FloatMenu from "../../components/FloatMenu";
// import Modal from "../components/Modal";

import './Feed.css';

export default function Feed() {
  const [mobile, setMobile] = useState(isMobile)
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
            <BlogList items={[{title: 'Teste', description: 'testessss', type: 'blog'}, {title: 'Teste', description: 'testessss', type: 'blog'}, {title: 'Teste', description: 'testessss', type: 'blog'}, {title: 'Teste', description: 'testessss', type: 'blog'}, {title: 'Teste', description: 'testessss', type: 'blog'}]} grid={true} />
          </>
        }
      </main>
      <Fab onClick={() => /*showModal('blog')*/{}}>
        +
      </Fab>
      {mobile && <FloatMenu />}
      {/* {showBlogModal ? <Modal><AddBlog showModal={[showCategoriesModal, () => showModal('categories')]} /></Modal> : null} */}
    </>
  );
}
