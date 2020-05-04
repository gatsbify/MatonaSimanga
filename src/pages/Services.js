import React from 'react';

import Layout from '../components/Layout';

const ServicesPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Our Services</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">
            Agricultural Science &amp; Environmental Management
          </h3>
          <p>
            We provide services and specialist studies focused on agricultural
            and environmental management solutions. We cater to clients
            throughout South Africa in order to assist them preserve our natural
            resources to the benefit of the environment for present and future
            generations.
            <a href="/AgriEnv" className="special">
              Learn more
            </a>
          </p>

          <h3 className="major">
            Mineral Resource Management & Mine Technical Services
          </h3>
          <p>
            The Mines Health and Safety Act, Act 29 of 1996 as amended and The
            Minerals and Petroleum Resources Development Act, Act 49 of 2008, as
            amended.
            <a href="/Mining" className="special">
              Learn more
            </a>
          </p>

          <section className="major">
            <h3 className="major">Digital &amp; Technology Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
              nulla dignissim dapibus ultrices.
              <a href="/Digital" className="special">
                Learn more
              </a>
            </p>

            <h3 className="major">
              Light Construction, Building Maintenance & Steel Fabrications
            </h3>
            <p>
              We provide services which include building alterations or
              additions, brickwork, plastering, ceilings & roofing. No job too
              small but we are limited to light construction work only. We also
              have our own professional welder on call for any steel fabrication
              work or steel manufacturing services.
              <a href="/Construction" className="special">
                Learn more
              </a>
            </p>

            <h3 className="major">
              Food Distribution Services & Informal Trade Operations
            </h3>
            <p>
              We operate 7 days a week, 365 days a year providing fresh produce
              to the Soul City local community, spaza shops & vendors.
              <a href="/Social" className="special">
                Learn more
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
