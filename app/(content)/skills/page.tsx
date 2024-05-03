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
        className="sticky-floating-filter"
        onChange={handleFilterChange}
        defaultActiveSkillsCategories={defaultActiveSkillsCategoriesValues}
      />
      <section className="mb-[60px] flex flex-col gap-4">
        {activeFilters
          .filter((activeFilter) => activeFilter.isActive)
          .map((activeFilter) => {
            return (
              <GlassCard
                key={activeFilter.category}
                className="p-5"
                // className="thin-scroll overflow-y-auto mt-5"
                // style={{ height: 'calc(100% - 70px)' }}
              >
                <div className="font-medium text-lg flex gap-2 justify-center items-center">
                  {activeFilter.icon}
                  <span>{activeFilter.displayName}</span>
                </div>
                <div className="grid grid-cols-3 grid-flow-row gap-20 fill-available-width p-[40px]">
                  {filteredSkillsList
                    .filter((skill) => skill.category === activeFilter.category)
                    .map((skill) => {
                      const { displayName, category, iconPath } = skill;

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
              </GlassCard>
            );
          })}
      </section>
    </>
  );
};

export default Skills;
