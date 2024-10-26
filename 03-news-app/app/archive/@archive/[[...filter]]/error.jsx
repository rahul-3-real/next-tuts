"use client";

const filterError = ({ error }) => {
  return (
    <div>
      <h2 className="text-4xl font-serif font-bold mb-7">An Error Occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default filterError;
