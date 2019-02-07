import React, { Component } from 'react';




class Product extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            description: '',
            quantity: '',
            price: '',
            image: ''
        };





    } 
    curentProducts = (products) => {

    
        console.log('fetching data');
    
        const url = `http://localhost:3000/categories/${this.props.type.category_id}/types/${this.props.type.id}/products/${products.id}`
    
        fetch(url)
          .then( response => response.json())
          .then( products => {
            console.log(products);
     
            this.setState({
              name: products,
             description: products,
              quantity: products,
              price: products,
              image: products
            })
          })
          .catch( error => {
            console.log(error)
          })
    
      }
   
    renderProducts(){
        console.log('byee', this.props.products)
       return this.props.products.map( product => {
            console.log('maping')
            return ( 
                <div onClick={ ()=> this.curentProducts(product)} className="col-sm-3"> 
                    <img src={product.image} alt="shoes" className="img-thumbnail"></img>
                    {/* <img src={product.image} alt=""></img> */}
                       <div className="with"> <h7>{product.name}</h7> <br/>
                    <h7>{product.description}</h7>  <br/>
                        {/* <h4> {product.quantity}</h4> */} 
                        <h9> $ {product.price} </h9> <br/>
                        <button type="button" class="btn btn-light" onClick={() => {this.props.addToCart(product)}}>Add To Cart</button>
                        </div>
                    {/* <button>Add To Cart</button> */}
                </div>
            )
        })
    }

     render (){
        return ( <div className="row product"> {this.renderProducts()} </div> ); 

    }
}

export default Product;
