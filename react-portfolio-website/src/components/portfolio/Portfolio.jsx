import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/port1.jpg';
import IMG2 from '../../assets/port2.jpg';
import IMG3 from '../../assets/port3.jpg';
import IMG4 from '../../assets/port4.jpg';
import IMG5 from '../../assets/port5.jpg';
import IMG6 from '../../assets/port6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'To Do List',
    github: 'https://github.com/cah311/to-do-list',
    demo: 'https://cah311.github.io/to-do-list/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Dynamic Web Page',
    github: 'https://github.com/cah311/restaurant-page',
    demo: 'https://cah311.github.io/restaurant-page/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tic Tac Toe',
    github: 'https://github.com/cah311/Tic-Tac-Toe',
    demo: 'https://cah311.github.io/Tic-Tac-Toe/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Admin Dashboard',
    github: 'https://github.com/cah311/Admin-Dashboard',
    demo: 'https://cah311.github.io/Admin-Dashboard/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Calulator',
    github: 'https://github.com/cah311/calculator',
    demo: 'https://cah311.github.io/calculator/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Etch-A-Sketch',
    github: 'https://github.com/cah311/etch-a-sketch',
    demo: 'https://cah311.github.io/etch-a-sketch/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
