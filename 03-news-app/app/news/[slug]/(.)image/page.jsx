import { notFound } from "next/navigation";
import Image from "next/image";

import { DUMMY_NEWS } from "@/dummy-news";

const InterceptedImagePage = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop"></div>
      <dialog className="modal" open>
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          fill
          className="!static block w-full"
        />
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
