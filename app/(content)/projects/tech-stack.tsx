import { skillsList } from '@/app/data';
import Image from 'next/image';

interface TechStackProps {
  stack?: string[];
}

const TechStack = (props: TechStackProps) => {
  const { stack = [] } = props;

  return (
    <div className="flex flex-wrap gap-4">
      {stack.map((tech) => {
        const matchedSkill = skillsList.find((skill) => skill.displayName === tech);

        if (!matchedSkill) {
          return null;
        }

        return (
          <div
            key={matchedSkill.displayName}
            className="tooltip min-w-[30px] max-w-[30px]"
            data-tip={matchedSkill.displayName}
          >
            <Image
              className="rounded w-fit text-xs"
              src={matchedSkill.iconPath}
              alt={matchedSkill.displayName}
              width={0}
              height={0}
              sizes="30px"
              style={{ height: '30px' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
