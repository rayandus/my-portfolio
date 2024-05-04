'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface AttributeRandomizerProps {
  attributes?: string[];
}

const AttributeRandomizer = (props: AttributeRandomizerProps) => {
  const { attributes = [] } = props;

  const [attribute, setAttribute] = useState(attributes[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * attributes.length);
        setAttribute(attributes[randomIndex]);
        setFadeIn(true);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={clsx(
        fadeIn ? 'fade-in' : 'fade-out',
        'flex justify-center items-center my-10 sm:my-4 text-6xl sm:text-5xl font-extrabold text-center min-h-40',
      )}
    >
      “ {attribute} ”
    </span>
  );
};

export default AttributeRandomizer;
