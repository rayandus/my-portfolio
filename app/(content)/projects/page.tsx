import { Metadata } from 'next';
import { projects } from '@/app/data/projects';
import TechStack from './tech-stack';
import { GlassCard } from '@/app/common';

export const metadata: Metadata = {
  title: 'Projects',
};

const Projects = () => {
  return (
    <section className="mb-[60px]">
      <div>
        <div className="flex flex-col gap-4 sm:gap-0">
          {projects.map((project) => {
            const {
              project: projectName,
              startDate,
              endDate,
              description,
              participation,
              techStack,
            } = project;

            return (
              <GlassCard
                key={projectName}
                className="p-5 sm:rounded-none sm:shadow-none sm:ring-1"
              >
                <div className="card-body p-6">
                  <h2 className="card-title">{projectName}</h2>
                  <div>
                    <span className="font-semibold pr-2">Timebox:</span>
                    <span>{`${startDate} - ${endDate}`}</span>
                  </div>
                  <div>
                    <span className="font-semibold pr-2">Description:</span>
                    <p
                      className="inline"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                  <div>
                    <span className="font-semibold pr-2">Participation:</span>
                    <p
                      className="inline"
                      dangerouslySetInnerHTML={{ __html: participation }}
                    />
                  </div>
                  <div>
                    <span className="flex font-bold bock mb-2">Tech Stack Used:</span>
                    <TechStack stack={techStack} />
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
