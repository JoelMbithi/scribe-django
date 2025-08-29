import React, { useState, useEffect } from "react";

const HotelNews = () => {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially
  const [expanded, setExpanded] = useState(false);

  const fetchNews = async () => {
    try {
      const response = await fetch("http://localhost:8000/news/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setNews(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Format the date nicely
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(3);
    } else {
      setVisibleCount(news.length);
    }
    setExpanded(!expanded);
  };

  return (
    <div className="bg-[rgb(0,0,0)] py-20 px-44">
      <h1 className="text-2xl font-bold flex mb-8 justify-center items-center text-amber-200">
        Hoteler News & Updates
      </h1>

      <div className="space-y-4">
        {news.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="p-4 ring-1 ring-amber-100 rounded-lg bg-black/50 text-amber-50"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-amber-200 text-sm">
              {item.date ? formatDate(item.date) : "Date unavailable"}
            </p>
            <p className="mt-2 text-amber-100">{item.content}</p>
          </div>
        ))}
      </div>

      {news.length > 3 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleToggle}
            className="px-6 py-2 bg-amber-200 text-black rounded-lg font-semibold hover:bg-amber-300 transition"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelNews;
