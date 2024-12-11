import { Link } from "react-router";

const Header = () => {
  return (
    <header className="w-full bg-slate-950 p-5">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white text-3xl">Posts</h1>
          <Link
            to="/create-post"
            className="bg-cyan-700 px-5 py-3 rounded text-md text-white"
          >
            Create Post
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
