import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Example from "./example";
import SideBarExample from "./sidebarExample";
import AntDSiderTest from "./antdSiderTests";

{
  /*<Example /><SideBarExample /> */
}

function App() {
  return (
    <Router>
      <AntDSiderTest />
    </Router>
  );
}

export default App;
