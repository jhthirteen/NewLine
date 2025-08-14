import React from 'react';
import './styles/LandingPage.css'

export default function Test() {
  return (
    <>
      <div className="main-container">
        <div className="layout-container">
          {/* Header */}
          <header className="header">
            <div className="logo-section">
              <div className="logo-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="logo-text">Newline</h2>
            </div>
            <div className="header-right">
              <div className="nav-links">
                <a className="nav-link" href="#">Learn</a>
                <a className="nav-link" href="#">Career Paths</a>
                <a className="nav-link" href="#">Tech Pulse</a>
              </div>
              <div className="header-buttons">
                <button className="btn btn-primary">
                  <span>Start Learning</span>
                </button>
                <button className="btn btn-secondary">
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="main-content">
            <div className="content-container">
              
              {/* Hero Section */}
              <div className="hero-container">
                <div className="hero-section">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      Learn Real Code. See the Trends. Build Your Career.
                    </h1>
                    <h2 className="hero-subtitle">
                      Newline is a beginner-first platform for self-learners with no CS background. Master Python and JavaScript, understand industry trends, and build a clear path to a tech career.
                    </h2>
                  </div>
                  <button className="btn btn-primary hero-btn">
                    <span>Start Learning</span>
                  </button>
                </div>
              </div>

              {/* Features Section */}
              <div className="features-section">
                <div className="features-header">
                  <h1 className="features-title">
                    Newline Features
                  </h1>
                  <p className="features-description">
                    Newline offers a unique blend of learning and career development tools to help you succeed in the tech industry.
                  </p>
                </div>
                
                <div className="features-grid">
                  {/* Feature 1 */}
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Zm-69.48,73.76.06-.05Zm95.15-.09-49.66-49.67a16,16,0,0,0-26,4.94l-19.42,44.65L48,48l159.87,52.21-44.64,19.41a16,16,0,0,0-4.94,26L208,195.31ZM88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM8,96a8,8,0,0,1,8-8h8a8,8,0,0,1,0,16H16A8,8,0,0,1,8,96ZM120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16Zm-81.69,96a8,8,0,0,1-3.58,10.74l-16,8a8,8,0,0,1-7.16-14.31l16-8A8,8,0,0,1,39.16,124.42Z" />
                      </svg>
                    </div>
                    <div className="feature-content">
                      <h2 className="feature-title">Interactive Micro-Lessons</h2>
                      <p className="feature-description">Engage with bite-sized lessons that make learning to code fun and effective.</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z" />
                      </svg>
                    </div>
                    <div className="feature-content">
                      <h2 className="feature-title">Mini-Projects with One-Click Deployment</h2>
                      <p className="feature-description">Build real-world projects and deploy them instantly to showcase your skills.</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
                      </svg>
                    </div>
                    <div className="feature-content">
                      <h2 className="feature-title">Personalized Career Insights</h2>
                      <p className="feature-description">Get tailored career advice based on your learning progress and goals.</p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M240,128a8,8,0,0,1-8,8H204.94l-37.78,75.58A8,8,0,0,1,160,216h-.4a8,8,0,0,1-7.08-5.14L95.35,60.76,63.28,131.31A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.85L88.72,36.69a8,8,0,0,1,14.76.46l57.51,151,31.85-63.71A8,8,0,0,1,200,120h32A8,8,0,0,1,240,128Z" />
                      </svg>
                    </div>
                    <div className="feature-content">
                      <h2 className="feature-title">Real-Time 'Tech Pulse' Dashboard</h2>
                      <p className="feature-description">
                        Stay ahead with a live view of trending technologies, in-demand skills, and job market insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer-container">
            <div className="footer-wrapper">
              <footer className="footer">
                <div className="footer-links">
                  <a className="footer-link" href="#">About</a>
                  <a className="footer-link" href="#">Contact</a>
                  <a className="footer-link" href="#">Privacy Policy</a>
                  <a className="footer-link" href="#">Terms of Service</a>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <div className="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="social-link">
                    <div className="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <p className="copyright">© 2024 Newline. All rights reserved.</p>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}