import React, { Component } from 'react';


import Product from './Product';



class Cart extends Component {

    totalPrice(){
        let total = 0;
        this.props.items.forEach(item => {
            total += item.price
        })
        return total
    }
   
     render (){
        return (
            <div>
                 <div className="row product">
                    {this.props.items.map(item => {
                        return(
                            <div className="col-sm-4">
                                <img src={item.image} alt="shoes" className="img-thumbnail"></img> <br/>
                                <h7>{item.name}</h7> <br/>
                                <h9> $ {item.price} </h9>
                            </div>
                        )
                        })}


            
         {/* <label>Total:</label><input type="number" value={this.state.totalPrice} name="Total" onChange={this.handleChange.bind(this)} /><br/> */}
        </div>
             {/* <h5>total: {this.totalPrice()}</h5> */}
            <div>
            <h5>Total: {this.totalPrice()}</h5>
                <button onClick={this.props.user}> Cheack Out</button>
            </div>
            </div>
       
            );
    }
}



export default Cart;
