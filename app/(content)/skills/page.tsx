'use client';

import { useCallback, useMemo, useState } from 'react';
import SkillsFilter, { SkillsCategory, skillsCategoryOptions } from './skills-filter';
import Image from 'next/image';
import { skillsList } from '@/app/data';
import { GlassCard } from '@/app/common';

const defaultActiveSkillsCategories = skillsCategoryOptions.map((option) => {
  return {
    ...option,
    isActive: true,
  };
});

const defaultActiveSkillsCategoriesValues = defaultActiveSkillsCategories.map(
  (option) => option.category,
);

const Skills = () => {
  const [activeFilters, setActiveFilters] = useState<SkillsCategory[]>(
    defaultActiveSkillsCategories,
  );

  const handleFilterChange = useCallback((activeSkillsCategory: SkillsCategory[]) => {
    setActiveFilters(activeSkillsCategory);
  }, []);

  const filteredSkillsList = useMemo(() => {
    if (!activeFilters) {
      return skillsList;
    }

    return skillsList.filter(
      (skills) =>
        activeFilters.some((filter) => filter.category === skills.category) &&
        skills.isVisible,
    );
  }, [activeFilters]);

  return (
    <>
      <SkillsFilter
        className="sticky-floating-filter sm:sticky-floating-filter"
        onChange={handleFilterChange}
        defaultActiveSkillsCategories={defaultActiveSkillsCategoriesValues}
      />
      <section className="flex flex-col mb-[60px] gap-4 sm:gap-0">
        {activeFilters
          .filter((activeFilter) => activeFilter.isActive)
          .map((activeFilter) => {
            return (
              <GlassCard
                key={activeFilter.category}
                className="p-5 sm:rounded-none sm:shadow-none sm:ring-1"
                // className="thin-scroll overflow-y-auto mt-5"
                // style={{ height: 'calc(100% - 70px)' }}
              >
                <div className="px-2 font-medium text-lg flex gap-2 justify-center items-center">
                  {activeFilter.icon}
                  <span>{activeFilter.displayName}</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 grid-flow-row gap-20 sm:gap-6 fill-available-width p-[40px] pb-[5px]">
                  {filteredSkillsList
                    .filter((skill) => skill.category === activeFilter.category)
                    .map((skill) => {
                      const { displayName, category, iconPath } = skill;

                      return (
                        <div
                          key={`${displayName}-${category}`}
                          // min-w-[100px] max-w-[100px]
                          className="flex justify-self-center items-center flex-col gap-2"
                        >
                          <Image
                            className="rounded-lg w-fit h-[100px] sm:h-[70px]"
                            src={iconPath}
                            alt={displayName}
                            width={0}
                            height={0}
                            sizes="100px"
                            // style={{ height: '100px' }}
                          />
                          <span className="font-bold text-center">{displayName}</span>
                        </div>
                      );
                    })}
                </div>
              </GlassCard>
            );
          })}
      </section>
    </>
  );
};

export default Skills;
