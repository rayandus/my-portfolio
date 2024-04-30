interface RoleDetailsProps {
  details: {
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

const RoleDetails = (props: RoleDetailsProps) => {
  const { details } = props;

  return (
    <div className="p-2 pt-5 flex flex-col gap-4">
      {details.map((detail) => {
        const { role, description, startDate, endDate } = detail;

        return (
          <div key={role}>
            <span className="font-bold pr-2">{role}</span>
            <span className="italic">{`(${startDate} - ${endDate})`}</span>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        );
      })}
    </div>
  );
};

export default RoleDetails;
