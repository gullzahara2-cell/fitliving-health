import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="card">
      <img src={post.image} alt={post.title} loading="lazy" />
      <div className="card-body">
        <span className="badge">{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
}