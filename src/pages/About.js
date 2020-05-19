import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.webp';
import pic2 from '../assets/images/pic02.webp';

const AboutPage = () => (
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
          <h3 className="major">Who are we?</h3>
          <p>
            At MatonaSimanga, our small team of dedicated professionals will add
            value to your organisation with emphasis on superior service,
            professional work ethics and a technological approach to viable
            organisational development. Our contract management, project &
            portfolio management services will fit into your budgetary
            constraints, servicing key segments within a specified scope without
            impacting negatively on service delivery levels or internal
            processes.
          </p>
          <p>
            We have strong socio-economic development principles inherent in all
            our business activities and we are actively involved in `doing our
            part. We also aim to build long lasting relations with all our
            customers, stakeholders and networking partners. We welcome
            diversity, assimilate change and stand fast to face all challenges
            that we may face as a nation. We stand for Unity, Leadership,
            Accountability, Trust &amp; Austerity. Our motto reflects our shared
            values, goals &amp; aspirations:- ``One for All for One``
          </p>
          <p>
            MatonaSimanga is situated in Krugersdorp which is on the West Rand,
            Gauteng Province, South Africa and forms part of the Mogale City
            Local Municipality. Established as a mining city, it was founded in
            1887 by Marthinus Pretorius following the discovery of gold on the
            Witwatersrand. Krugersdorp was proclaimed a municipality in 1903.
            Also within this region is the township known as Kagiso, which means
            `peace` in Tswana. Kagiso was established in 1920 by ex-miners and
            squatters from nearby Luipaardsvlei and now also includes Soul City
            Informal Settlement, where, we have been active since 2017 providing
            fresh produce to the local community.
          </p>
          <p>
            Since our inception in 2013 under our legal entity Venus Cor (Pty)
            Ltd, we have been providing a number of specialized services mainly
            to the mining sector. These specialist disciplines range from
            Environmental Management to Mine Technical Services and includes
            surface & underground mine surveying, geological modeling, mine
            planning & mineral resource management to name but a few. During our
            seven years in operation, we served many mines nationally as
            contractors within the ambit of mine technical services &
            environmental management. We also conducted extensive work at the
            oldest underground Gold mine on the West Rand and served many other
            surface & underground mining operations in other provinces.
            Unfortunately due to the harsh economic conditions and the downturn
            in mining operations we had no alternative but to diversify and
            adapt our approach early in 2017.
          </p>
          <p>
            {' '}
            During that same year we suffered major losses due to mine closures
            and we then decided to extend our services to other sectors, which
            includes light construction, building maintenance & steel
            fabrications. These services were mainly aligned to informal trade
            practices during our start-up phase but steady growth through hard
            work and commitment saw us making headway to a more commercially
            viable business unit.
          </p>
          <p>
            Re-manufacturing services will focus on extending asset life cycles
            and in doing so will not only reduce our environmental footprint but
            will show increased profitability for smaller organisations.
          </p>
          <h3 className="major">Proudly BBBEE</h3>
          <p>
            In addition we have aligned ourselves with a network of
            professionals and micro-investors who share our vision of a better
            world......from the bottom up!
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Services</h3>
              <p>
                We provide services and specialist studies focused on
                agricultural and environmental management solutions. We cater to
                clients throughout South Africa in order to assist them preserve
                our natural resources to the benefit of the environment for
                present and future generations.
              </p>
              <a href="/Services" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic2} alt="" />
              </a>
              <h3 className="major">Social Responsibility</h3>
              <p>
                We operate 7 days a week, 365 days a year providing fresh
                produce to the Soul City local community, spaza shops & vendors.
              </p>
              <a href="/Social" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
