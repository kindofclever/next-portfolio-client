import { SkillsSectionProps } from '@/lib/interfaces';
import React from 'react';

function getIcon(name: string): ((props: any) => React.JSX.Element) | null {
  switch (name) {
    case 'CLOCK_ICON':
      return ClockIcon;
    case 'CHECK_ICON':
      return CheckIcon;
    case 'CLOUD_ICON':
      return CloudIcon;
    default:
      return null;
  }
}

function SkillsSection({ data }: { readonly data: SkillsSectionProps }) {
  const { skills, heading, subHeading } = data;
  return (
    <div className=''>
      <div className='flex-1'>
        <section className='container px-4 py-6 mx-auto md:px-6 lg:py-24'>
          <div className='grid gap-8 md:grid-cols-3'>
            <h2 className='mb-4 text-2xl font-bold'>{heading}</h2>
            <p className='text-gray-500'>{subHeading}</p>
            {skills.map((skill) => {
              const Icon = getIcon(skill.skillIcon);
              return (
                <div
                  key={skill.skillName}
                  className='flex flex-col items-center text-center'>
                  {Icon && <Icon />}
                  <h3>{skill.skillName}</h3>
                  <h3>{skill.skillDescription}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <polyline points='20 6 9 17 4 12' />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <circle
        cx='12'
        cy='12'
        r='10'
      />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z' />
    </svg>
  );
}
export default SkillsSection;
