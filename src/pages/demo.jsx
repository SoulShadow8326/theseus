import React, { useEffect } from 'react';
import Nav from '../components/navbar';
import './demo.css';
const armModel = new URL('../assets/2hisid.glb', import.meta.url).href;

const Demo = () => {
  useEffect(() => {
    if (!customElements.get('model-viewer')) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
      document.head.appendChild(script)
    }
  }, [])
  return (
    <div className="demo-page">
      <Nav />

      <main className="demo-main">
        <div className="demo-viewer">
          <model-viewer src={armModel} alt="Avatar" camera-controls auto-rotate exposure="1" shadow-intensity="1" style={{width:'100%',height:'100%'}}></model-viewer>
        </div>
      </main>
    </div>
  );
};

export default Demo;
