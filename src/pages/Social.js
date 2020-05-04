import React from 'react';

import Layout from '../components/Layout';

const SocialPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Food Distribution Services &amp; Informal Trade Operations</h2>
          <p>Soul City Fruit &amp; Veg (Spaza Shop Outlet)</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Background</h3>
          <p>
            We operate 7 days a week, 365 days a year providing fresh produce to
            the Soul City local community, spaza shops &amp; vendors. We managed
            to consistently remain operational during social unrests, mass
            arrests, repatriations and now during the Covid-19 pandemic lockdown
            period.
          </p>
          <a href="/Services" className="special">
            Services
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default SocialPage;
