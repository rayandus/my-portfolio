interface ContentProps {
  children?: React.ReactNode;
}

const Content = (props: ContentProps) => {
  const { children } = props;

  return (
    // flex h-full flex-col px-3 py-4 w-96
    <section className="flex h-full w-full flex-col">
      <div className="h-inherit flex flex-col grow rounded-r-xl bg-white/20 border-r border-t botder-b border-black/5 pt-9 px-5">
        {children}
      </div>
    </section>
  );
};

export default Content;
