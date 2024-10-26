import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

const NewsDetail = ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="grid grid-cols-6 gap-10">
      <div className="col-span-2">
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            fill
            className="!static block w-full"
          />
        </Link>
      </div>
      <div className="col-span-4">
        <h1 className="text-4xl font-serif font-bold mb-4">{newsItem.title}</h1>
        <p className="text-gray-600 text-sm mb-7">Published: {newsItem.date}</p>
        <p>{newsItem.content}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
