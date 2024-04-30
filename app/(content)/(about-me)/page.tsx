'use client';

import { useEffect, useState } from 'react';
import { EmojiSmile } from 'react-bootstrap-icons';
import clsx from 'clsx';

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

const Home = () => {
  const [attribute, setAttribute] = useState(professionalAttributes[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * professionalAttributes.length);
        setAttribute(professionalAttributes[randomIndex]);
        setFadeIn(true);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-l">
        <span className="block text-xl mt-10">I am Ray and I am...</span>
        <span
          className={clsx(
            fadeIn ? 'fade-in' : 'fade-out',
            'flex justify-center items-center m-10 text-6xl font-extrabold text-center min-h-40',
          )}
        >
          “ {attribute} ”
        </span>
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
            build. There is no better reward than to see those apps enjoyed by people who
            need them.
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
            <EmojiSmile size={20} className="ml-2 inline" />
          </p>
        </article>
      </div>
    </div>
  );
};

export default Home;
