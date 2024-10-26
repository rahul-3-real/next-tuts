import { notFound } from "next/navigation";
import Image from "next/image";

import { DUMMY_NEWS } from "@/dummy-news";

const ImagePage = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <Image
      src={`/images/news/${newsItem.image}`}
      alt={newsItem.title}
      fill
      className="!static block w-full"
    />
  );
};

export default ImagePage;
