import React from 'react';
import Layout from '@theme/Layout';
import Features from '@site/src/components/Features';
import Preview from '@site/src/components/Preview';
import YouTube from '@site/src/components/YouTube';
import Languages from '@site/src/components/Languages';
import Stars from '../components/Stars';
import Contributors from '../components/Contributors';
import Hero from '../components/Hero';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AnimationsContextProvider from '../hooks/useAnimations';
import Lightrope from '../components/Christmas/Lightrope';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <AnimationsContextProvider>
      <Layout
        title={siteConfig.title}
        description={siteConfig.tagline}
      >
        <main>
          <Lightrope />
          <Hero />
          <Preview />
          <Features />
          <YouTube />
          <Stars starsCount={120}>
            <Languages />
            <Contributors />
          </Stars>
        </main>
      </Layout>
    </AnimationsContextProvider>
  );
};

export default Home;
