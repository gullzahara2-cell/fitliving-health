
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import SEO from "../components/SEO";

export default function Blog() {
  const { name } = useParams();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState(name || "All");

  // URL badle to category bhi badle
  const active = name || cat;

  const filtered = posts.filter(
    (p) =>
      (active === "All" || p.category === active) &&
      p.title.toLowerCase().includes(query.toLowerCase())
  );

  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <SEO title={name || "Blog"} description="Browse all fitness, exercise and healthy lifestyle articles." />
      <section className="section container">
        <h1 className="page-title">{name ? name : "Our Blog"}</h1>

        <input
          className="search"
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="filters">
          <Link to="/blog" className={`chip ${active === "All" ? "on" : ""}`} onClick={() => setCat("All")}>
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              to={`/category/${c}`}
              className={`chip ${active === c ? "on" : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </Link>
          ))}
        </div>

        <div className="grid">
          {filtered.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`} className="card">
              <img src={post.image} alt={post.title} />
              <div className="card-body">
                <span className="tag">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && <p>No articles found.</p>}
      </section>
    </>
  );
}