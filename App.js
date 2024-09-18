
/*
 <div id ="parent">
  <div id="child">
     <h1>I m Heading tag</h1>
       <h2>I m Heading 2 tag</h2>
  </div>
 </div>
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
React.createElement(
    "div",
    {id:"child"},
[React.createElement("h1",{},"I m HEADING TAG"),React.createElement("h2",{},"I M H2 Tag")]
)
);
 

const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)