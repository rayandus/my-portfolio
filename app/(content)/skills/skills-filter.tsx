'use client';

import { SkillsCategoryEnum } from '@/app/types';

import { useCallback, useMemo, useState } from 'react';
import {
  Cloud,
  Database,
  Display,
  FunnelFill,
  HddRack,
  ThreeDots,
} from 'react-bootstrap-icons';
import clsx from 'clsx';

export interface SkillsCategory {
  displayName: string;
  icon: React.ReactNode;
  category: SkillsCategoryEnum;
  isActive: boolean;
}

export const skillsCategoryOptions: SkillsCategory[] = [
  {
    displayName: 'Front-end',
    icon: <Display />,
    category: SkillsCategoryEnum.FRONTEND,
    isActive: false,
  },
  {
    displayName: 'Back-end',
    icon: <HddRack />,
    category: SkillsCategoryEnum.BACKEND,
    isActive: false,
  },
  {
    displayName: 'Database',
    icon: <Database />,
    category: SkillsCategoryEnum.DATABASE,
    isActive: false,
  },
  {
    displayName: 'Cloud',
    icon: <Cloud />,
    category: SkillsCategoryEnum.CLOUD,
    isActive: false,
  },
  {
    displayName: 'Others',
    icon: <ThreeDots />,
    category: SkillsCategoryEnum.OTHERS,
    isActive: false,
  },
];

interface SkillsFilterProps {
  className?: string;
  defaultActiveSkillsCategories?: SkillsCategoryEnum[];
  onChange?: (activeSkillsCategory: SkillsCategory[]) => void;
}

const SkillsFilter = (props: SkillsFilterProps) => {
  const { className, defaultActiveSkillsCategories = [], onChange = () => {} } = props;

  const defaultActiveFilters = useMemo(() => {
    return skillsCategoryOptions
      .filter((option) => defaultActiveSkillsCategories.includes(option.category))
      .map((option) => {
        return {
          ...option,
          isActive: true,
        };
      });
  }, [defaultActiveSkillsCategories]);

  const [activeFilters, setActiveFilters] =
    useState<SkillsCategory[]>(defaultActiveFilters);

  const handleSelect = useCallback(
    (category: SkillsCategoryEnum) => {
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

        const filteredValue = updatedValue.filter((value) => value.isActive);

        if (!filteredValue.length) {
          return prevValue;
        }

        onChange(filteredValue);

        return updatedValue;
      });
    },
    [onChange],
  );

  const mappedOptions = useMemo(() => {
    return skillsCategoryOptions.map((option) => {
      const matchedActiveFilter = activeFilters?.find(
        (filter) => filter.category === option.category,
      );

      return {
        ...option,
        isActive: matchedActiveFilter?.isActive || false,
      };
    });
  }, [activeFilters]);

  return (
    <div className={className}>
      <div className="flex flex-col items-center m-[5px] gap-2">
        <div className="tooltip" data-tip="Skills Filter">
          <FunnelFill />
        </div>
        <div className="flex justify-center join join-vertical">
          {mappedOptions.map((option) => {
            const { displayName, icon, isActive } = option;

            return (
              <button
                key={displayName}
                className={clsx(
                  'btn btn-outline btn-sm join-item tooltip',
                  isActive && 'btn-active',
                )}
                onClick={() => handleSelect(option.category)}
                data-tip={displayName}
              >
                {icon}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsFilter;
