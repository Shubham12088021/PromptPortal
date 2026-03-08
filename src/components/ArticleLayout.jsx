import "./ArticleLayout.css";

function ArticleLayout({ title, children }) {

  return (

    <div className="article-container">

      <h1 className="article-title">
        {title}
      </h1>

      <div className="article-content">
        {children}
      </div>

    </div>

  );

}

export default ArticleLayout;