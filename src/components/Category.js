import React, { Component } from 'react';






const Category = props => {
    return (

      <div className="back" onClick={() => {props.setCurrentCategory(null)} }>
        <h1>{props.categories.name}</h1>
      </div>


    );
}


// class Category extends Component {
// constructor(){
//     super();
//     this.state = {
//         name: '',
//     }
// }
// render(){
//     return (
//             <div>
//             <h1> {this.props.categories}</h1>

//             </div>



//     );
           
// }



// }











export default Category;
