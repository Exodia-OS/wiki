import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">

            <h1 className="hero__title">Exodia OS</h1>

            <p className="hero__subtitle">A highly customized arch-based distro For All Cybersecurity fields.</p>

            <img className="banner__img" alt="Banner" src="img/Predator-ed.gif"/>

            <div className={styles.buttons}>
                <Link
                    className="button button--lg"
                    to="/docs/intro">
                    Get Started
                </Link>

                <Link
                    className="button button--dl button--lg"
                    to="https://exodia-os.github.io/download.html">
                    Download
                </Link>

            </div>
        </div>
    </header>
  );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
      description="A highly customized arch-based distro For All Cybersecurity fields.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
