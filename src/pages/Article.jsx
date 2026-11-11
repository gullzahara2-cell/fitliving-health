import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";
import "./Article.css";

export default function Article() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <section className="section container narrow">
        <h1 className="page-title">Article not found</h1>
        <p style={{ textAlign: "center" }}>
          <Link to="/blog" className="btn">Back to Blog</Link>
        </p>
      </section>
    );
  }

  const related = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <article className="section container article">
        <SEO title={post.title} description={post.excerpt} />
        <Link to={`/category/${post.category}`} className="badge">
          {post.category}
        </Link>
        <h1>{post.title}</h1>
        <p className="meta">Published on {post.date}</p>
        <img src={post.image} alt={post.title} className="article-img" />

        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {post.sources && post.sources.length > 0 && (
          <div className="sources">
            <h3>Sources</h3>
            <ul>
              {post.sources.map((s, i) => (
                <li key={i}>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  ) : (
                    s.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="disclaimer">
          This article is for educational purposes only and is not medical
          advice. Consult a qualified professional before starting a new
          exercise or diet plan.
        </p>
        <Link to="/blog" className="read-more">
          ← Back to all articles
        </Link>
      </article>

      {related.length > 0 && (
        <section className="container section">
          <h2 className="section-title">Related Articles</h2>
          <div className="grid">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
      </>
  );
}