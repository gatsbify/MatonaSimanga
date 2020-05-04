import React from 'react';
import Layout from '../components/Layout';
import pic1 from '../assets/images/pic01.webp';
import pic2 from '../assets/images/pic02.webp';
import pic5 from '../assets/images/pic05.webp';
import pic13 from '../assets/images/pic013.webp';
import pic14 from '../assets/images/pic014.webp';
import pic16 from '../assets/images/pic016.webp';
import pic17 from '../assets/images/pic017.webp';
import pic18 from '../assets/images/logo-banner_80.webp';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon1-bg"></span>
        </div>
        <h2>
          <a href="/#" className="image">
            <img src={pic18} alt="" />
          </a>
        </h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">
              ``One for <u>All</u> for One``
            </h2>
            <p>
              We have strong socio-economic development principles inherent in
              all our business activities and we are actively involved in `doing
              our part`. We welcome diversity, assimilate change and stand fast
              to face all challenges that we may face as a nation. We stand for
              Unity, Leadership, Accountability, Trust & Austerity. Our motto
              reflects our shared values, goals & aspira0tions:- ``One for All
              for One``
            </p>
            <a href="/About" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic17} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Social Responsibility</h2>
            <p>Content from Shawn</p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Our Services</h2>
          <p>
            MatonaSimanga is capable of providing the range of Service which
            includes the following :
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic14} alt="" />
              </a>
              <h3 className="major">
                Agricultural Science &amp; Environmental Management
              </h3>
              <p>
                We provide services and specialist studies focused on
                agricultural and environmental management solutions.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic13} alt="" />
              </a>
              <h3 className="major">
                Minning Resource Management &amp; Technical Services
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic16} alt="" />
              </a>
              <h3 className="major">Digital &amp; Technology Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic2} alt="" />
              </a>
              <h3 className="major">
                Light Construction, Building Maintenance &amp; Steel
                Fabrications
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
