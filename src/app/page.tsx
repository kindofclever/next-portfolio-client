import { Button } from '@/components/ui/button';

async function getStrapiData(path: string) {
  const baseUrl = 'http://localhost:1337';

  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const cmsData = await getStrapiData('/api/home-page');

  const { title, description } = cmsData.data.attributes;

  return (
    <main className='container py-6 mx-auto'>
      <Button variant='outline'>{title}</Button>
      <Button variant='outline'>{description}</Button>
    </main>
  );
}
