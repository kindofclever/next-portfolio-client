import { Button } from '@/components/ui/button';
import qs from 'qs';
import { getStrapiData } from '@/lib/utils';

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        image: {
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

  const { title, description } = cmsData.data.attributes;

  return (
    <main className='container py-6 mx-auto'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='text-xl mt-4'>{description}</p>
      <Button
        variant='outline'
        className='mt-4'>
        Click me
      </Button>
    </main>
  );
}
