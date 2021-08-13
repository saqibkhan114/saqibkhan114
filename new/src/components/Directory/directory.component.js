import React from "react";
//import MenuItem from "../MenuItem/menu-item.component";
import CollectionItem from "../collection-item/collection-item.component";

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Burger",
          imageUrl: "../images/Burger.JPG",
          id: 1,
          linkUrl: "Burger",
        },
        {
          title: "Chicken",
          imageUrl: "../images/Chicken.JPG",
          id: 2,
          linkUrl: "Chicken",
        },
        {
          title: "Dal",
          imageUrl: "../images/DalMakhani.JPG",
          id: 3,
          linkUrl: "DalMakhani",
        },
        {
          title: "Samosa",
          imageUrl: "../images/Samosa.JPG",
          size: "large",
          id: 4,
          linkUrl: "Samosa",
        },
        {
          title: "Snacks",
          imageUrl: "../images/Snacks.JPG",
          size: "large",
          id: 5,
          linkUrl: "Snacks",
        },
      ],
    };
  }
  render() {
   
    
    return (
      <div className='directory-menu'>
    
       <CollectionItem items={this.state.sections} />
    </div>
    );
  }
}

export default Directory;