import Sidebar from "./Sidebar";
import "./DocsLayout.css";

function DocsLayout({ children }) {

  return (

    <div className="docs-layout">

      <Sidebar />

      <div className="docs-content">
        {children}
      </div>

    </div>

  );

}

export default DocsLayout;