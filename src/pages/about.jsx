import React from 'react';
import Nav from '../components/navbar';
import '../index.css';
import './about.css';
import armSrc from '../assets/arm.png';

export default function About() {
	return (
		<div className="about-page">
			<Nav />
			<main className="about-main">
				<h1 className="about-title">Our <span style={{ color: 'var(--pink)' }}>Product</span></h1>

				<section className="about-content">
					<div className="panel left-panel">
						<div className="panel-inner">
							<p>
								A cybernetic is <span className="accent">implanted</span> onto the user
								and inside the cybernetic a new arm is grown.
							</p>
							<p>
								This <span className="accent">arm will take data</span> from the user's
								body (skin tone, arm length, etc.) and create a "biologically perfect"
								arm inside the cybernetic one, an arm with near <span className="accent">superhuman efficiency</span>.
							</p>
						</div>
					</div>

					<div className="hand-card">
						<div className="card-inner">
							<div className="card-art">
								<img src={armSrc} alt="MecHand" />
							</div>
							<div className="card-caption">
								<h2>A-001</h2>
								<p>Biotech Arm</p>
							</div>
						</div>
					</div>

					<div className="panel right-panel">
						<div className="panel-inner">
							<p>
								It connects directly to the user's <span className="accent">nerves</span> and
								<span className="accent"> muscles</span>, with full strength, precision, and feedback.
							</p>
							<p>
								Inside, the arm contains small channels and support structures that supply
								<span className="accent"> nutrients, oxygen, and growth signals</span> to lab-grown
								cells made from the user's <span className="accent">DNA</span>.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
