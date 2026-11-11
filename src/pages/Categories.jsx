import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { categories, posts } from "../data/posts";
import "./Pages.css";

export default function Categories() {
  return (
    <>
      <SEO title="Categories" description="Home workouts, fitness tips, healthy life and exercise guides." />
      <section className="section container">
        <h1 className="page-title">Categories</h1>
        <div className="grid">
          {categories.map((c) => {
            const count = posts.filter((p) => p.category === c.name).length;
            return (
              <Link key={c.name} to={`/category/${c.name}`} className="cat-card">
                <img src={c.image} alt={c.name} className="cat-img" />
                <h3>{c.name}</h3>
                <p>{count} article{count !== 1 && "s"}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}