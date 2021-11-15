import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import NewsCard from "../../component/NewsCard";

export default function News() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=313ef30cc1bb4ce19381038499d010ff"
    )
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setNews(data.articles);
        },
        (error) => {
          setIsLoaded(true);
          setNews(error);
        }
      );
  }, []);
  return (
    <div>
      <Navbar page="news" />
      <div
        className="container-fluid d-flex flex-wrap justify-content-center"
        style={{ backgroundColor: "lightgray" }}
      >
        {news.map((data) => (
          <NewsCard
            image={data.urlToImage}
            title={data.title}
            author={data.author}
            link={data.url}
          />
        ))}
      </div>
    </div>
  );
}
