import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsBoard.css";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setTimeout(() => setFade(true), 100);
      });
  }, [category]);

  return (
    <div className={`news-board ${fade ? "fade-in" : "fade-out"}`}>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
