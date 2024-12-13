"use client";

const error = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-white mb-7">
          An error occurred!
        </h2>
        <p>Failed to fetch meal data. Please try again later.</p>
      </div>
    </section>
  );
};

export default error;
