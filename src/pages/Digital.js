import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.webp';

const AboutPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Technology Services</h2>
          <p></p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Digital Transformation</h3>
          <p>
            At MatonaSimanga, we are a well-balanced skilled team of dedicated
            professionals will add value to your organisation with emphasis on
            superior service, professional work ethics and a technological
            approach to viable organisational development. Our contract
            management, project &amp; portfolio management services will fit
            into your budgetary constraints, servicing key segments within a
            specified scope without impacting negatively on service delivery
            levels or internal processes.
          </p>
          <h3 className="major">Website &amp; Social Media</h3>
          <p>
            MatonaSimanga is situated in Krugersdorp, on the West Rand, Gauteng
            Province, South Africa which forms part of the Mogale City Local
            Municipality and is a mining city founded in 1887 by Marthinus
            Pretorius. Following the discovery of gold on the Witwatersrand, a
            need arose for a major town in the west of the gold reef.
            Krugersdorp was proclaimed a municipality in 1903.{' '}
          </p>{' '}
          <h3 className="major">RPA - Robotic Process Automation</h3>
          <p>
            Also within this region is the township known as Kagiso, which means
            peace in Tswana. Kagiso was established in 1920 by ex-miners and
            squatters from nearby Luipaardsvlei and now also includes Soul City
            Informal Settlement, where, we have been active since 2017 providing
            fresh produce to the local community as part of our social
            development initiatives.
          </p>
          <h3 className="major">Artificial Intelligence</h3>
          <p>
            {' '}
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
          <h3 className="major">LoraWan</h3>
          <p>
            In addition we have aligned ourselves with a network of
            professionals and micro-investors who share our vision of a better
            world......from the bottom up!
          </p>
          <article>
            <a href="/Construction" className="image">
              <img src={pic4} alt="" />
            </a>
          </article>
          <section className="features">
            <a href="/Construction" className="special">
              Light Construction
            </a>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
