import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import "./pages/Home.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PostRedirect() {
  const { id } = useParams();
  return <Navigate to={`/blog/${id}`} replace />;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/post/:id" element={<PostRedirect />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}