import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { posts, categories } from "../data/posts";
import "./Home.css";

export default function Home() {
  return (
    <>
    <SEO title="Health & Fitness Blog" description="Evidence-based fitness, home workouts and healthy lifestyle guides." />
      {/* Hero */}
      <section className="hero">
        <div className="hero">
  <div className="hero-text">
    <span className="hero-badge">💪 100% Free • No Gym Needed</span>
    <h1>Live Fit. Eat Well.<br/>Feel Great.</h1>
    <p>Evidence-based fitness, exercise and healthy lifestyle guides for everyone.</p>
    <div className="hero-buttons">
      <a href="/blog" className="btn-yellow">Explore Articles →</a>
      <a href="/blog" className="btn-white">Home Workouts</a>
    </div>
    <div className="hero-stats">
      <span><b>5+</b> Expert Guides</span>
      <span><b>100%</b> Free</span>
      <span><b>0</b> Equipment Needed</span>
    </div>
  </div>
  <div className="hero-image">
    <img src="/images/hero.jpg" alt="Workout" />
  </div>
</div>
      </section>

      {/* Categories */}
      <section className="section container">
        <h2 className="section-title">Explore Categories</h2>
        <div className="grid">
          {categories.map((c) => (
            <Link key={c.name} to={`/category/${c.name}`} className="cat-card">
              <span className="cat-icon">{c.icon}</span>
              <h3>{c.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest posts */}
      <section className="section container">
        <h2 className="section-title">Latest Articles</h2>
        <div className="grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}