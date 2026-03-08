function CodeBlock({ code }) {

  return (

    <div className="relative my-6">

      <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">

        <code>
          {code}
        </code>

      </pre>

      <span className="absolute top-2 right-3 text-xs text-gray-400">
        code
      </span>

    </div>

  );

}

export default CodeBlock;