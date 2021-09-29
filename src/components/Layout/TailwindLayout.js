import { useState } from "react";
import MyChart from "../News/MyChart";

const TailwindLayout = () => {
  const [news, setNews] = useState([]);
  //   useEffect(() => {
  //     (async function () {
  //       const res = await fetch(
  //         "https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=c9e8ee1d319f4b49918565a9e2f146ba"
  //       );
  //       const data = await res.json();
  //       setNews(data.articles);
  //     })();
  //   }, []);
  return (
    <>
      {/* <TailwindNav /> */}
      <MyChart />
    </>
  );
};

export default TailwindLayout;
