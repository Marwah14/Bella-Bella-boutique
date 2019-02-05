import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Category from './components/Category';




class App extends Component {
  constructor(){
    super();
    this.state = {
      categories: [],
      currentCategory: null,
      activeNave: "clothes" , 
      navs: [ "Clothes" , "Bags" , "Shoes" , "Accessories"]
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

      })
      .catch( error => {
        console.log(error)
      })
  }


  renderCategory(allCategory){

    return allCategory.map((categories) => {
      return (
     
        <Category key={categories.id}
          categories={categories}
          setCurrentCategory={this.setCurrentCategory.bind(this)}/>
          
      )
    })
  }

  setCurrentCategory(Category) {
    this.setState({
      currentCategory: Category,
      // currentCategory: name
    })
  }


  onNavClick = (activeNave) => {
      console.log("you clicked on " , activeNave)
      this.setState({activeNave})
  }

  render() {
    return (
      <div>

        <Nav navs= {this.state.navs} onNavClick={this.onNavClick}/>
        <div className="container mt-5">
          {this.state.activeNave === "clothes" ? "this is the clothing page" : ""}
          {this.state.activeNave === "bags" ? "this is the Bags page" : ""}

          {this.state.activeNave === "shoes" ? "this is the Shoes page" : ""}
          {this.state.activeNave === "accessories" ? "this is the Accessories page" : ""}

        </div>

        <h1> {this.renderCategory(this.state.categories)} </h1>
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
