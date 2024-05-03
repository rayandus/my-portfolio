import { CheckCircleFill } from 'react-bootstrap-icons';
import { workExperiences } from '@/app/data/work-experience';
import dayjs from 'dayjs';
import RoleDetails from './role-details';
import { GlassCard } from '@/app/common';

const WorkExperience = () => {
  return (
    <section className="mb-[60px]">
      {/* <div
        className="thin-scroll overflow-y-auto mt-5"
        style={{ height: 'calc(100% - 70px)' }}
      > */}
      <GlassCard className="p-5">
        <ul className="timeline timeline-vertical timeline-left timeline-snap-icon py-8">
          {workExperiences.map((workExperience, index) => {
            const { companyName, companyHq, roles } = workExperience;

            const firstRoleExperience = roles.at(-1);
            const startWorkDate =
              firstRoleExperience && dayjs(firstRoleExperience.startDate, 'MMMM YYYY');

            const lastRoleExperience = roles[0];
            const lastWorkDate =
              lastRoleExperience && dayjs(lastRoleExperience.endDate, 'MMMM YYYY');

            const totalMonths = lastWorkDate.diff(startWorkDate, 'month');

            const totalYears = Math.round(totalMonths / 12);

            const isLast = workExperiences.length === index + 1;

            return (
              <li key={companyName}>
                {index !== 0 && <hr />}
                <div className="timeline-start timeline-left-start">
                  {lastWorkDate?.year()}
                </div>
                <div className="timeline-middle">
                  <CheckCircleFill size={18} />
                </div>
                <div className="timeline-end">
                  <div className="timeline-box rounded-xl w-fit">
                    <span className="font-bold mr-2">{`${companyName}, ${companyHq}`}</span>
                    {totalYears >= 1 ? (
                      <span className="badge badge-ghost rounded-md">{`${totalYears} ${totalYears > 1 ? 'years' : 'year'}`}</span>
                    ) : (
                      <span className="badge badge-ghost rounded-md">&lt; 1 year</span>
                    )}
                  </div>
                  <RoleDetails details={roles} />
                </div>
                {!isLast && <hr />}
              </li>
            );
          })}
        </ul>
      </GlassCard>
    </section>
  );
};

export default WorkExperience;

{
  /* <li>
          <div className="timeline-start">1984</div>
          <div className="timeline-middle">
            <CheckCircleFill size={18} />
          </div>
          <div className="timeline-end timeline-box">First Macintosh computer</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start">2015</div>
          <div className="timeline-middle">
            <CheckCircleFill size={18} />
          </div>
          <div className="timeline-end timeline-box">Apple Watch</div>
        </li>
         */
}
