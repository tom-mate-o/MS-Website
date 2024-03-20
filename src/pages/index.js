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

import React, { useState } from 'react';

export function HomepageHeader({ language, toggleLanguage }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="hero__container">
        <div className="hero__text">
          <Heading as="h1" className="hero__title">
            {/* Verwenden Sie den Titel aus der JSON-Datei basierend auf der ausgewählten Sprache */}
            <h1>
              {indexText.hero.title1[language]}
              <u>MIRIAM STERL</u>
              {indexText.hero.title2[language]}
            </h1>
          </Heading>

          {/* Verwenden Sie den Untertitel aus der JSON-Datei basierend auf der ausgewählten Sprache */}
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
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader language={language} toggleLanguage={toggleLanguage} />
      <main>
        <div className="home__container">
          <div className="home__smallboxesContainer">
            <div className="home__boxitem small">
              <h1>{indexText.boxitem1.title[language]}</h1>
              <p>{indexText.boxitem1.text[language]}</p>
            </div>

            <div className="home__boxitem small">
              <h1>{indexText.boxitem2.title[language]}</h1>
              <p>{indexText.boxitem2.text[language]}</p>
            </div>
          </div>

          <div className="home__boxitem fullwidth">
            <h1>{indexText.boxitem3.title[language]}</h1>
            <p>{indexText.boxitem3.text[language]}</p>
          </div>

          <div className="home__latestBlogPosts">
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

          <div className="home__boxitem fullwidth">
            <h1>{indexText.boxitem4.title[language]}</h1>
            <p>{indexText.boxitem4.text[language]}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
