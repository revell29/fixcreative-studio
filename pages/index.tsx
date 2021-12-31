import type { NextPage } from 'next';
import { LayoutRoot } from '~/components/layout/layout-root';
import { MainHero } from '~/components/hero/banner';
import { BlogHero } from '~/components/hero/blog';
import ReviewHero from '~/components/hero/review';
import { FooterHero } from '~/components/hero/footer';

const Home: NextPage = () => {
  return (
    <LayoutRoot>
      <MainHero />
      <BlogHero />
      <ReviewHero />
      <FooterHero />
    </LayoutRoot>
  );
};

export default Home;
