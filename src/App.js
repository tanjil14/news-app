import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import News from "./components/Navigation.js/News";
import Navigation from "./components/Navigation/Navbar";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=c9e8ee1d319f4b49918565a9e2f146ba"
      );
      const data = await res.json();
      setNews(data.articles);
    })();
  }, []);
  return (
    <>
      <Navigation />
      <Container className="text-center">
        {news.length === 0 ? (
          <Spinner animation="border"  />
        ) : (
          <Row xs={1} md={3} className="g-4">
            {news.map((nw) => (
              <News news={nw} key={Math.random()} />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
