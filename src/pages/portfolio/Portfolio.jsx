import React from "react";
import { portfolio } from "../../data";
import PortfolioItems from "../../components/PortfolioItems";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section-title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio-container container grid">
        {portfolio.map((item) => {
          return <PortfolioItems key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
