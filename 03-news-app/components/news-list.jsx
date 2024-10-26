import Image from "next/image";
import Link from "next/link";

const NewsList = ({ news }) => {
  return (
    <>
      <ul className="grid grid-cols-4 gap-7">
        {news.map((item) => (
          <li key={item.id} className="h-full">
            <Link href={`/news/${item.slug}`} className="block">
              <div className="relative block h-full">
                <Image
                  className="object-cover rounded-md w-full !static"
                  src={`/images/news/${item.image}`}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <h2 className="text-xl font-semibold mt-4 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm">{item.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsList;
