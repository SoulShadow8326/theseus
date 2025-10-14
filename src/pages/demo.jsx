import React from 'react';
import Nav from '../components/navbar';
import './demo.css';

const Demo = () => {
  return (
    <div className="demo-page">
      <Nav />
      <header className="demo-hero">
        <div className="demo-hero-inner">
          <h1>Demo</h1>
          <h2>Visualise your choice</h2>
        </div>
      </header>

      <main className="demo-main">
        <div className="demo-viewer">
          <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
          <model-viewer src="/src/assets/avatar.glb" alt="Avatar" camera-controls auto-rotate exposure="1" shadow-intensity="1" style={{width:'100%',height:'100%'}}></model-viewer>
        </div>
      </main>
    </div>
  );
};

export default Demo;
