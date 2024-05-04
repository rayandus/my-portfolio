import { Metadata } from 'next';
import SkillsList from './skills-list';

export const metadata: Metadata = {
  title: 'Skills',
};

const Skills = () => {
  return <SkillsList />;
};

export default Skills;
