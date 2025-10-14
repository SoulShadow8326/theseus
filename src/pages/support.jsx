import React from 'react';
import Nav from '../components/navbar';
import SpotlightCard from '../components/SpotlightCard';
import './support.css';

const topics = [
  { title: 'Spot', img: 'https://support.bostondynamics.com/sfsites/c/cms/delivery/media/MCZRMJFB235JGQRHA3NYCC5NJOSU', desc: 'Agile mobile robot for dynamic sensing' },
  { title: 'Orbit', img: 'https://support.bostondynamics.com/sfsites/c/cms/delivery/media/MC5SE7Y5CPEVDBDCCPYYUBBSTZ7Y', desc: 'Manage your robot fleet, schedule' },
  { title: 'Stretch', img: 'https://support.bostondynamics.com/sfsites/c/cms/delivery/media/MCG3HAVCMCYRCZ7HGJKEXP6QB6UM', desc: 'Case handling robot to streamline' }
];

const Support = () => {
  return (
    <div className="support-page">
      <Nav />
      <header className="support-hero">
        <div className="support-hero-inner">
          <h1>Theseus<br/>Support Center</h1>
          <div className="support-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input type="search" placeholder="How can we help you?" aria-label="Search" />
          </div>
        </div>
      </header>


      <main className="support-main">
        <section className="topic-cards">
          {topics.map((t, i) => (
            <SpotlightCard key={i} className="topic-card">
              <img src={t.img} alt={t.title} />
              <div className="topic-card-body">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </section>

        <section className="support-links">
          <h2>Browse support topics</h2>
          <div className="support-columns">
            <div className="col">
              <h3>Spot</h3>
              <ul>
                <li>Get Started with Spot</li>
                <li>Administration</li>
              </ul>
            </div>
            <div className="col">
              <h3>Orbit</h3>
              <ul>
                <li>About Orbit</li>
                <li>Drive Spot with Orbit</li>
              </ul>
            </div>
            <div className="col">
              <h3>Support Center</h3>
              <ul>
                <li>About the Support Center</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Support;
