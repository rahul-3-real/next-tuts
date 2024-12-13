const NotFound = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-white mb-7">Meal Not Found!</h2>
        <p>Failed to fetch meal data. Please try again later.</p>
      </div>
    </section>
  );
};

export default NotFound;
