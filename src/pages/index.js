import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { blogPosts } from '@site/src/blogPosts';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <h1>{siteConfig.title}</h1>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="home__container">
          <div className="home__smallboxesContainer">
            <div className="home__boxitem small">
              <h1>Boxitem 1</h1>
            </div>

            <div className="home__boxitem small">
              <h1>Boxitem 2</h1>
            </div>
          </div>

          <div className="home__boxitem fullwidth">
            <h1>Boxitem 3</h1>
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
            <h1>Boxitem 4</h1>
          </div>
        </div>
      </main>
    </Layout>
  );
}
