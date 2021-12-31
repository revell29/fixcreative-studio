import type { NextPage } from 'next';
import { MainHero } from '~/components/hero/banner';
import { BlogHero } from '~/components/hero/blog';
import { PackageHero } from '~/components/hero/package';
import ReviewHero from '~/components/hero/review';

const Home: NextPage = () => {
  return (
    <>
      <MainHero />
      <BlogHero />
      <PackageHero />
      <ReviewHero />
    </>
  );
};

export default Home;
