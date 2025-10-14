import React from 'react';
import Nav from '../components/navbar';
import CardSwap, { Card } from '../components/CardSwap';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <Nav />
      <header className="about-hero">
        <div className="about-hero-inner">
          <h1>About Theseus</h1>
          <p>Building modern tools to help teams work better.</p>
        </div>
      </header>

      <main className="about-main">
        <section className="about-cards">
          <div style={{ height: '600px', position: 'relative'}}>
            <CardSwap cardDistance={200} verticalDistance={100} delay={3000} pauseOnHover={true}>
              <Card>
                <div className="card-inner">
                  <h3>Our Mission</h3>
                  <p>We build delightful tools for teams.</p>
                </div>
              </Card>
              <Card>
                <div className="card-inner">
                  <h3>Our Team</h3>
                  <p>Engineers and designers building at the intersection of web and 3D.</p>
                </div>
              </Card>
              <Card>
                <div className="card-inner">
                  <h3>Our Values</h3>
                  <p>Open, curious, and pragmatic.</p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
