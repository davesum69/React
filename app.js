import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo
 * -  Nav Items
 * -  Cart 
 * Body
 *  - Search
 *  - Restaurant List
 *    - Restaurant Card
 *      - Image
 *      - Name
 *      - Rating
 *     - Cuisines
 * 
 * -Footer
 *    - Links
 *    - Copyright
 *    - Address
 *     - Contact
 *      - Social Links
 */
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

const Title = () => {
  return (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2bH0yjOBsziAt3KWdW-RhSoJ8drDIDtXsQ&s" />
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-itemt">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>   
        </ul>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <RestaurantCard />
      <p>Welcome to my React app!</p>
    </div>
  );
};

const SearchComponent = () => {
  return (
    <div className="search">Search</div>
  );
};

//   

const RestaurantList = [
  {
  name: "Burger King",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2bH0yjOBsziAt3KWdW-RhSoJ8drDIDtXsQ&s",
  rating: 4.0,
  cuisines: ["American", "Fast Food"],
},{
  name: "McDonald's",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2bH0yjOBsziAt3KWdW-RhSoJ8drDIDtXsQ&s",
  rating: 4.2,
  cuisines: ["American", "Fast Food"],
}
];


const RestaurantCard = () => {
  return (
    <>
      {RestaurantList.map((restaurant) => (
        <div className="card" key={restaurant.name}>
          <img src={restaurant.image} alt={restaurant.name} />
          <h2>{restaurant.name}</h2>
          <h3>Rating: {restaurant.rating}</h3>
          <p>Cuisines: {restaurant.cuisines.join(", ")}</p>
        </div>
      ))}
    </>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer">Footer </div>
  );
};

const LayoutComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LayoutComponent />);
