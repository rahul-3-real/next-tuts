import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

const News = () => {
  return (
    <>
      <h1 className="text-4xl font-serif font-bold mb-7">News</h1>

      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default News;
