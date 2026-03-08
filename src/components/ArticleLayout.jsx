function ArticleLayout({ title, children }) {

  return (

    <div className="max-w-4xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-6 text-purple-700">
        {title}
      </h1>

      <div className="prose prose-lg max-w-none prose-purple">
        {children}
      </div>

    </div>

  );

}

export default ArticleLayout;