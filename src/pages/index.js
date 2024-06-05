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
import boximage1 from '../images/boximages/boximage1.JPG';
import boximage2 from '../images/boximages/boximage2.JPG';
import boximage3 from '../images/boximages/boximage3.JPG';
import boximage4 from '../images/boximages/boximage4.JPG';

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
            <div className="home__latestBlogPosts__recentcontainer">
              {blogPosts.map((post, index) => (
                <div
                  className="home__latestBlogPosts__postcontainer"
                  key={index}
                >
                  <div className="home__latestBlogPosts__icon">
                    <Link to={post.link[0]} target="_self">
                      <svg
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                          fill-rule="evenodd"
                        ></path>
                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z"></path>
                      </svg>
                    </Link>
                  </div>
                  <p className="home__latestBlogPosts__date">
                    {new Date(post.pubDate).toLocaleDateString('en', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="home__latestBlogPosts__posttitle">
                    <Link to={post.link[0]} target="_self">
                      {' '}
                      {post.title[0]}
                    </Link>
                  </h2>

                  <p className="home__latestBlogPosts__description">
                    {post.description[0]}{' '}
                    <Link to={post.link[0]} target="_self">
                      ...read more!
                    </Link>
                  </p>
                </div>
              ))}
            </div>
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
