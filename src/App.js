import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Category from './components/Category';
import Cart from './components/Cart';




class App extends Component {
  constructor(){
    super();
    this.state = {
      categories: [],
      currentCategory: null,
      activeNav: "clothes" , 
      categoryType: [], 
      navs: ["home"],
      cart: [],
      showCart: false
    };
  }



  componentDidMount(){
    console.log('fetching data');
    fetch('http://localhost:3000/categories')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        // this.renderCategory(data)
        this.setState({
          categories: data
        })

        let navs = this.state.categories.map( category => {
          return category.name
        })

        this.setState({ navs: this.state.navs.concat(navs)})
  

      })
      .catch( error => {
        console.log(error)
      })
  }


  setCurrentCategory(category) {

    console.log(category) 
    console.log('fetching data');

    const url = `http://localhost:3000/categories/${category.id}/types`

    fetch(url)
      .then( response => response.json())
      .then( categoryType => {
        console.log(categoryType);
 
        this.setState({
          categoryType, currentCategory: category
        })
      })
      .catch( error => {
        console.log(error)
      })

  }

  onNavClick = (activeNav) => {
      console.log("you clicked on " , activeNav)

      this.setState({activeNav, showCart: false})

       let currentCategory = this.state.categories.filter( category => {
         if( activeNav=== category.name.toLowerCase()){
         return category
         }
       })

       if(currentCategory.length > 0 )
       this.setCurrentCategory(currentCategory[0])
      
  }



  addToCart(product){
    const addToCart = this.state.cart.concat([product]);
    this.setState({
      cart: addToCart
    })
  }

  toggleCart(){
    this.setState({
    showCart: !this.state.showCart
  })
 
}

  render() {
    return (
      <div>
        <Nav navs= {this.state.navs} onNavClick={this.onNavClick} active={this.state.activeNav} showCart={this.toggleCart.bind(this)}/>
     {this.state.showCart ?
        <Cart items={this.state.cart} /> : (<div className="container mt-5">
        {this.state.activeNave === "clothes" ? "this is the clothing page" : ""}
        {this.state.activeNave === "bags" ? "this is the Bags page" : ""}

        {this.state.activeNave === "shoes" ? "this is the Shoes page" : ""}
        {this.state.activeNave === "accessories" ? "this is the Accessories page" : ""}


        {this.state.categoryType != null ? <Category addToCart={this.addToCart.bind(this)} categoryType={this.state.categoryType} /> : "" }
        

      </div> )  }



      {/* <div className="sara">
      <p> New Collections</p> */}
      {/* <img src="https://cdn-static.farfetch-contents.com/Content/UP/people_page/2018/06/bags-ww/1-lg.jpg"   width="auto" height="550" alt="shoes"></img> */}
  
      {/* </div> */}
                {/* <div className="topnav"> */}
                  {/* <a className="active" href="#clothes" onClick={this.state.categories}> Clothes</a> */}
                {/* <a href="#Bags" onClick=''>Bags</a>
                <a href="#Shoes" onClick=''>Shoes</a>
          <a href="#Accessories" onClick=''>Accessories</a> */}



    
         
         {/* <Clothes onClick={this.renderContent}/> */}
        
            
      </div>
    );
    }
  }


export default App;
