'use client';

import { useCallback, useMemo, useState } from 'react';
import { Cloud, Database, Display, HddRack, ThreeDots } from 'react-bootstrap-icons';
import clsx from 'clsx';

export enum SkillsCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  CLOUD = 'cloud',
  OTHERS = 'others',
}

const options = [
  {
    displayName: 'Front-end',
    icon: <Display />,
    value: SkillsCategory.FRONTEND,
    isActive: false,
  },
  {
    displayName: 'Back-end',
    icon: <HddRack />,
    value: SkillsCategory.BACKEND,
    isActive: false,
  },
  {
    displayName: 'Database',
    icon: <Database />,
    value: SkillsCategory.DATABASE,
    isActive: false,
  },
  {
    displayName: 'Cloud',
    icon: <Cloud />,
    value: SkillsCategory.CLOUD,
    isActive: false,
  },
  {
    displayName: 'Others',
    icon: <ThreeDots />,
    value: SkillsCategory.OTHERS,
    isActive: false,
  },
];

interface SkillsFilterProps {
  onChange?: (activeSkillsCategory: SkillsCategory[]) => void;
}

const SkillsFilter = (props: SkillsFilterProps) => {
  const { onChange = () => {} } = props;

  const defaultFilters = useMemo(() => {
    return options.map((option) => ({
      category: option.value,
      isActive: option.isActive,
    }));
  }, []);

  const [activeFilters, setActiveFilters] =
    useState<{ category: SkillsCategory; isActive: boolean }[]>(defaultFilters);

  const handleSelect = useCallback(
    (category: SkillsCategory) => {
      setActiveFilters((prevValue) => {
        const updatedValue = prevValue.map((value) => {
          if (category !== value.category) {
            return value;
          }

          return {
            ...value,
            isActive: !value.isActive,
          };
        });

        const filteredValue = updatedValue
          .filter((value) => value.isActive)
          .map((value) => value.category);

        onChange(filteredValue);

        return updatedValue;
      });
    },
    [onChange],
  );

  const mappedOptions = useMemo(() => {
    return options.map((option) => {
      const matchedActiveFilter = activeFilters?.find(
        (filter) => filter.category === option.value,
      );

      return {
        ...option,
        isActive: matchedActiveFilter?.isActive || false,
      };
    });
  }, [activeFilters]);

  return (
    <div>
      <div className="flex justify-center join">
        {mappedOptions.map((option) => {
          const { displayName, icon, isActive } = option;
          return (
            <button
              key={displayName}
              className={clsx(
                'btn btn-outline btn-sm join-item',
                isActive && 'btn-active',
              )}
              onClick={() => handleSelect(option.value)}
            >
              {icon}
              {displayName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsFilter;
