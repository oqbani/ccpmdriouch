import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Articlesjson from "./ArticlesJson";

const ArticlesDetails: React.FC = () => {
  const { ArticleId } = useParams<{ ArticleId?: string }>();

  if (!ArticleId) {
    return <div>Error: Article ID not provided</div>;
  }

  const article = Articlesjson.find((p) => p.id === parseInt(ArticleId, 10));

  if (!article) {
    return <div>Error: Article not found</div>;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-5">
      <div className="" key={article.id}>
        <div className="article-content text-center d-flex flex-column gap-2">
          <div className="lignes my-4">
            <div className="ligne"></div>
            <h2>{article.title}</h2>
            <div className="ligne"></div>
          </div>
          <h1 className="">Article {article.id}</h1>
          <div className="fs-4">{article.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetails;
