import NewsList from "@/components/news-list";
import { getLatestNews } from "@/libs/news";

const LatestNews = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h1 className="text-4xl font-serif font-bold mb-7">Latest News</h1>

      <NewsList news={latestNews} />
    </>
  );
};

export default LatestNews;
