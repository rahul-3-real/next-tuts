import { Link, useLoaderData } from "react-router";

const Home = () => {
  const posts = useLoaderData();

  return (
    <div className="container mx-auto">
      {posts.length > 0 && (
        <div className="grid grid-cols-3 gap-5">
          {posts.map((post) => (
            <div className="col" key={post.id}>
              <Link to={`/${post.id}`} className="p-4 bg-slate-500 block">
                <p>{post.body}</p>
                <h6>{post.author}</h6>
              </Link>
            </div>
          ))}
        </div>
      )}

      {posts.length === 0 && (
        <p className="text-white">No posts found. Please create a new post.</p>
      )}
    </div>
  );
};

export default Home;

export const loader = async () => {
  const response = await fetch("http://localhost:8000/posts");
  const resData = await response.json();

  return resData.posts;
};
