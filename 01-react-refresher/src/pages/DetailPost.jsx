import { Link, useLoaderData } from "react-router";
import Modal from "../components/Modal";

const DetailPost = () => {
  const post = useLoaderData();

  return (
    <Modal>
      <h1 className="text-white text-xl mb-5">{post.author}</h1>
      <p className="text-white mb-10">{post.body}</p>

      <Link
        to="/"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Go Back
      </Link>
    </Modal>
  );
};

export default DetailPost;

export const loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8000/posts/${params.id}`);
  const resData = await response.json();

  return resData.post;
};
