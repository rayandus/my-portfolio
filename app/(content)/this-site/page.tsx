import { Metadata } from 'next';
import Image from 'next/image';
import { GlassCard } from '@/app/common';
import { skillsList } from '@/app/data';
import { EmojiSmileUpsideDownFill, Github, HeartFill } from 'react-bootstrap-icons';

export const metadata: Metadata = {
  title: 'This Site',
};

const techStackUsed = [
  'Nextjs',
  'Reactjs',
  'Typescript',
  'Javascript',
  'Tailwind',
  'Daisy UI',
  'CSS',
];

const ThisSite = () => {
  const matchedSkills = skillsList.filter((skill) =>
    techStackUsed.includes(skill.displayName),
  );

  return (
    <section className="mb-[60px]">
      <GlassCard
        className="h-stretch-vw p-10"
        style={{ minHeight: '738px', height: 'calc(100vh - 120px)' }}
      >
        <div className="flex gap-6 thin-scroll overflow-x-auto pb-4">
          {techStackUsed.map((techStack) => {
            const matchedSkill = matchedSkills.find(
              (skill) => skill.displayName === techStack,
            );

            if (!matchedSkill) {
              return null;
            }

            const { category, displayName, iconPath } = matchedSkill;

            return (
              <div
                key={`${displayName}-${category}`}
                className="flex justify-self-center items-center flex-col gap-2 min-w-[100px] max-w-[100px]"
              >
                <Image
                  className="rounded-lg w-fit"
                  src={iconPath}
                  alt={displayName}
                  width={0}
                  height={0}
                  sizes="100px"
                  style={{ height: '100px' }}
                />
                <span className="font-bold text-center">{displayName}</span>
              </div>
            );
          })}
        </div>
        <p className="text-lg mt-2">
          This portfolio site is a Nextjs, Tailwind, Daisy UI pet project. I chose Nextjs
          over a static site generator for learning purposes.
          <EmojiSmileUpsideDownFill
            size={25}
            className="inline text-amber-300 ml-2 -mt-[3px]"
          />
        </p>
        <p className="text-lg mt-4">
          If you like this project, I will be sharing the github code soon
          <Github size={25} className="inline ml-2 -mt-[3px]" />
          <HeartFill size={25} className="inline text-red-500 ml-2 -mt-[3px]" />
        </p>
      </GlassCard>
    </section>
  );
};

export default ThisSite;
