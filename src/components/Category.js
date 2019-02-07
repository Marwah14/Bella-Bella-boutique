import React, { Component } from 'react';
import Product from './Product';

// const Category = props => {
//     return (

//       <div className="back" onClick={() => {props.setCurrentCategory(null)} }>
//         <h1>{props.categories.name}</h1>
//       </div>


//     );
// }

class Category extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            products: [],
            currentCatagory: ''
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.categoryType.toString() !== this.props.categoryType.toString()){
            this.setState({products: []})
        }
    }

    fetchProduct = (type) => {

    
        console.log('fetching data');
    
        const url = `http://localhost:3000/categories/${type.category_id}/types/${type.id}/products`
    
        fetch(url)
          .then( response => response.json())
          .then( data => {
            console.log(data);
     
            this.setState({
              products: data,
              currentCatagory: type 
            })
          })
          .catch( error => {
            console.log(error)
          })
    
      }

    renderCol(){
       return this.props.categoryType.map(type => {
            return (<div className="col-sm" onClick={ ()=> this.fetchProduct(type) }> {type.name} </div>); 
       });
    }
    
    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                    {this.renderCol()}
                    </div>
                </div>
                <div className="container">
                    {this.state.products != null ? <Product addToCart={this.props.addToCart} products={this.state.products}  type={this.state.currentCatagory}/> : ""}
                </div>
            </div>
        );
            
    }
}



export default Category;
