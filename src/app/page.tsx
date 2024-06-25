import qs from 'qs';
import { getStrapiData } from '@/lib/utils';
import { HeroSection } from '@/components/custom/HeroSection';
import SkillsSection from '@/components/custom/SkillsSection';

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
        skills: {
          fields: ['skillName', 'skillDescription', 'skillIcon'],
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
      <SkillsSection data={blocks[1]} />
    </main>
  );
}
