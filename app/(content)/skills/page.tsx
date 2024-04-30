'use client';

import { useCallback, useMemo, useState } from 'react';
import SkillsFilter, { SkillsCategory } from './skills-filter';
import Image from 'next/image';
import { skillsList } from '@/app/data';

const Skills = () => {
  const [activeFilters, setActiveFilters] = useState<SkillsCategory[]>();

  const handleFilterChange = useCallback((activeSkillsCategory: SkillsCategory[]) => {
    setActiveFilters(activeSkillsCategory);
  }, []);

  const filteredSkillsList = useMemo(() => {
    if (!activeFilters) {
      return skillsList;
    }

    return skillsList.filter(
      (skills) => activeFilters.includes(skills.category) && skills.isVisible,
    );
  }, [activeFilters]);

  return (
    <section className="h-inherit">
      <SkillsFilter onChange={handleFilterChange} />
      <div
        className="thin-scroll overflow-y-auto mt-5"
        style={{ height: 'calc(100% - 70px)' }}
      >
        <div className="grid grid-cols-3 grid-flow-row gap-10 px-10">
          {filteredSkillsList.map((skill) => {
            const { displayName, category, iconPath } = skill;

            return (
              <div
                key={`${displayName}-${category}`}
                className="flex justify-self-center items-center flex-col gap-2"
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
      </div>
    </section>
  );
};

export default Skills;
