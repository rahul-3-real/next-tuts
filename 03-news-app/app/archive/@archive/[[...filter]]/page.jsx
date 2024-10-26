import Link from "next/link";

import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/libs/news";

const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <h1 className="text-4xl font-serif font-bold mb-7">Archive</h1>

      <div className="mb-7">
        <ul className="flex items-center justify-start gap-3">
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link
                  href={href}
                  className="p-2 rounded-md bg-white text-slate-900 text-sm font-bold"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
