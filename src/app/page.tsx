import qs from 'qs';
import { getStrapiData } from '@/lib/utils';
import { HeroSection } from '@/components/custom/HeroSection';

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        heroImage: {
          fields: ['url', 'alternativeText'],
        },
        link: {
          populate: true,
        },
      },
    },
  },
});

export default async function Home() {
  const cmsData = await getStrapiData('/api/home-page', homePageQuery);

  const { blocks } = cmsData;

  return (
    <main className='container py-6 mx-auto'>
      <HeroSection data={blocks[0]} />
    </main>
  );
}
