import "./CodeBlock.css";

function CodeBlock({ code }) {

  return (

    <div className="codeblock-container">

      <pre className="codeblock-pre">

        <code>
          {code}
        </code>

      </pre>

      <span className="codeblock-label">
        code
      </span>

    </div>

  );

}

export default CodeBlock;