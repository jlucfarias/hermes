import Menu from "../../components/Menu";

import './Post.css';

export default function Post() {
  return (
    <>
      <Menu />
      <main className="post-container">
        <header className="post-header">
          <h1 className="post-title">Title</h1>
          <h3 className="post-subtitle">Subtitle</h3>
          <section className="post-meta">
            <a>Favorite</a>
            <a>Share</a>
            <span className="post-time">4 min read</span>
          </section>
        </header>
        <article className="post-main">
          {true ?
              <img className="post-thumb" src="https://picsum.photos/id/237/1000/600" />
          : null}
          <section className="post-content">
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
