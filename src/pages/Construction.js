import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.webp';
import pic5 from '../assets/images/pic05.webp';

const ConstructionPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Us</h2>
          <p></p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Light Construction &amp; Steel Fabrication</h3>
          <p>
            We provide services which include building alterations or additions,
            brickwork, plastering, ceilings & roofing. No job too small but we
            are limited to light construction work only. We also have our own
            professional welder on call for any steel fabrication work or steel
            manufacturing services.
          </p>

          <h3 className="major">Our Work</h3>

          <section className="features">
            <a href="/Social" className="special">
              Food Distribution
            </a>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default ConstructionPage;
