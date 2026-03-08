import Sidebar from "./Sidebar";

function DocsLayout({ children }) {

  return (

    <div className="flex max-w-7xl mx-auto gap-8">

      <Sidebar />

      <div className="flex-1 p-10">
        {children}
      </div>

    </div>

  );

}

export default DocsLayout;