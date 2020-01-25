import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
      console.log(location.pathname)
  }, [location]);
}

const App2 = () => {
  usePageViews();
  return (
    <div>
        
    </div>
);
};

export default App2;

// ReactDOM.render(
//   <Router>
//     <App2 />
//   </Router>,
//   node
// );

