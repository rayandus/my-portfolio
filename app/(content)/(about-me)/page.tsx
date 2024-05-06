import { Metadata } from 'next';
import { EmojiSmileFill } from 'react-bootstrap-icons';
import { GlassCard } from '@/app/common';
import AttributeRandomizer from './attribute-randomizer';

const professionalAttributes = [
  'a coder',
  'passionate',
  'a professional',
  'experienced',
  'tenacious',
  'creative',
  'agile',
  'resourceful',
  'a team player',
  'inquisitive',
  'a goer for the extra mile',
  'empathic',
];

export const metadata: Metadata = {
  title: 'About Me',
};

const Home = () => {
  return (
    <section className="mb-[60px]">
      <GlassCard className="h-stretch-vw p-5 min-h-[738px] h-[calc(100vh - 120px)] xl:min-h-0 xl:h-fit">
        <div className="text-l p-8">
          <span className="block text-xl">I am Ray and I am...</span>
          <AttributeRandomizer attributes={professionalAttributes} />
          <article className="text-xl leading-relaxed">
            <p>
              I am a full stack developer specializing in the{' '}
              <span
                className="tooltip underline decoration-dotted underline-offset-4"
                data-tip="MongoDB, Expressjs, Reactjs, Nodejs"
              >
                MERN
              </span>{' '}
              stack with a passion for improving lives though the apps I create or help
              build. There is no better reward than to see those apps enjoyed by people
              who need them.
            </p>
            <p className="mt-5">
              Aside from coding, I love engaging myself in architecturing solutions from
              front to back.
            </p>
            <p className="mt-5">
              As a people-oriented individual, I excel in collaborative settings.
            </p>
            <p className="mt-5">
              Feel free to explore my portfolio to know more about me
              <EmojiSmileFill size={20} className="ml-2 inline text-amber-300" />
            </p>
          </article>
        </div>
      </GlassCard>
    </section>
  );
};

export default Home;
