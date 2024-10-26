const ArchiveLayout = ({ archive, latest }) => {
  return (
    <>
      <section>{archive}</section>
      <hr className="my-7" />
      <section>{latest}</section>
    </>
  );
};

export default ArchiveLayout;
