import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import indexText from './indexText.json';
import { blogPosts } from '@site/src/blogPosts';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import herobg from '../images/hero_bg.jpg';
import miriam from '../images/miriam.jpg';
import boximage1 from '../images/boximages/boximage1.jpg';
import boximage2 from '../images/boximages/boximage2.jpg';
import boximage3 from '../images/boximages/boximage3.jpg';
import boximage4 from '../images/boximages/boximage4.jpg';

import React, { useState } from 'react';

export function HomepageHeader({ language, toggleLanguage }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="hero__container">
        <div className="hero__text">
          <Heading as="h1" className="hero__title">
            <h1>
              {indexText.hero.title1[language]}

              <u style={{ whiteSpace: 'nowrap' }}>MIRIAM STERL</u>
              {indexText.hero.title2[language]}
            </h1>
          </Heading>

          <p className="hero__subtitle">{indexText.hero.subtitle[language]}</p>
        </div>
        <div className="hero__image">
          <img className="hero__avatar" src={miriam} alt="hero background" />
        </div>
        <button className="hero__languageButton" onClick={toggleLanguage}>
          {language === 'en' ? '🇳🇱' : '🇬🇧'}
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'nl' : 'en');
  };

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader language={language} toggleLanguage={toggleLanguage} />
      <main>
        <div className="home__container">
          <div className="home__smallboxesContainer">
            <div className="home__boxitem small">
              <h2>{indexText.boxitem1.title[language]}</h2>
              <img className="home__boximage small" src={boximage1} alt="" />
              <p>{indexText.boxitem1.text[language]}</p>
              <Link to={indexText.boxitem1.link}>
                <button>
                  <h3>{indexText.boxitem1.button[language]}</h3>
                </button>
              </Link>
            </div>

            <div className="home__boxitem small">
              <h2>{indexText.boxitem2.title[language]}</h2>
              <img className="home__boximage small" src={boximage2} alt="" />
              <p>{indexText.boxitem2.text[language]}</p>
              <Link to={indexText.boxitem2.link}>
                <button>
                  <h3>{indexText.boxitem2.button[language]}</h3>
                </button>
              </Link>
            </div>
          </div>

          <div className="home__boxitem fullwidth">
            <div className="fullwidth__title">
              <h2>{indexText.boxitem3.title[language]}</h2>
            </div>
            <div className="fullwidth__image">
              <img
                className="home__boximage fulliwdth"
                src={boximage3}
                alt=""
              />
            </div>
            <div className="fullwidth__textAndButton">
              <p>{indexText.boxitem3.text[language]}</p>

              <Link to={indexText.boxitem3.link}>
                <button>
                  <h3>{indexText.boxitem3.button[language]}</h3>
                </button>
              </Link>
            </div>
          </div>

          <div className="home__latestBlogPosts">
            <h2 className="home__latestBlogPosts__title">
              {indexText.blogpostbox.title[language]}
            </h2>
            {blogPosts.map((post, index) => (
              <div className="" key={index}>
                <p>
                  {new Date(post.pubDate).toLocaleDateString('en', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <h2>{post.title[0]}</h2>

                <p>{post.description[0]}</p>
              </div>
            ))}
          </div>

          <div className="home__boxitem fullwidth right">
            <div className="fullwidth__title">
              <h2>{indexText.boxitem4.title[language]}</h2>
            </div>
            <div className="fullwidth__image">
              <img
                className="home__boximage fulliwdth"
                src={boximage4}
                alt=""
              />
            </div>
            <div className="fullwidth__textAndButton">
              <p>{indexText.boxitem4.text[language]}</p>

              <Link to={indexText.boxitem4.link}>
                <button>
                  <h3>{indexText.boxitem4.button[language]}</h3>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
