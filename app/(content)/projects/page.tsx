import { projects } from '@/app/data/projects';
import TechStack from './tech-stack';
import { GlassCard } from '@/app/common';

const Projects = () => {
  return (
    <section className="mb-[60px]">
      <div>
        <div className="flex flex-col gap-4 pr-2">
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
              // <div
              //   key={projectName}
              //   className="card card-side text-base bg-white/0 shadow-lg ring-1 ring-inset ring-white/5 backdrop-blur-3xl last-of-type:mb-6"
              // >
              <GlassCard key={projectName} className="p-5">
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
