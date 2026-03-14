import React from "react";
import ReactDOM from "react-dom/client";

const mainmenu = React.createElement(
  "nav",
  {
    id: "mymenu",
    className: "navbar",
  },
  [
    React.createElement(
      "ul",
      { id: "mygroup1", className: "nav-list", key: "choicegroup1" },
      [
        React.createElement(
          "li",
          { id: "mychoice1", className: "nav-item", key: "choice1" },
          [
            React.createElement(
              "a",
              {
                id: "mychoice1",
                href: "#home",
                className: "nav-link",
                key: "choice1",
              },
              "Choice 1",
            ),
          ],
        ),
        React.createElement(
          "li",
          { id: "mychoice2", className: "nav-item", key: "choice2" },
          [
            React.createElement(
              "a",
              {
                id: "mychoice2",
                href: "#home",
                className: "nav-link",
                key: "choice2",
              },
              "Choice 2",
            ),
          ],
        ),
      ],
    ),
  ],
);

const BreakingNews = () => {
  return (
    <div className="newcontainer">
      <h3>Breaking News</h3>
      <ul>
        <li>News 1</li>
        <li>News 2</li>
        <li>News 3</li>
      </ul>
    </div>
  );
};

const DisplayComponent = () => {
  return (
    <h3>
      Display Functional Component
      {mainmenu}
      <BreakingNews/>
    </h3>

  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DisplayComponent />);
