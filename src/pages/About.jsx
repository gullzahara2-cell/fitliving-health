import SEO from "../components/SEO";
import "./Pages.css";

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about FitLiving and our mission to make fitness simple." />
      <section className="section container">
        <h1 className="page-title">About Us</h1>
        <p>
          Welcome to FitLiving — your trusted source for evidence-based
          fitness, home workouts and healthy lifestyle guides.
        </p>
        <p>
          Our mission is simple: make fitness easy, practical and
          enjoyable for everyone, no matter where you start.
        </p>
        <h2>What We Do</h2>
        <p>
          We share simple home workouts, fitness tips, healthy habits
          and exercise guides that you can follow without expensive
          equipment or gym membership.
        </p>
      </section>
    </>
  );
}