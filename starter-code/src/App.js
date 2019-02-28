import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from'./Components/FoodBox.js';
import AddFoodButton from'./Components/AddFoodButton.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      foodlist:foods
    }
  }

  addFoodhandler = (theFood) => {
    const foodsCopy = [...this.state.foodlist];
    foodsCopy.push(theFood);
    this.setState({
      foodlist: foodsCopy
    })
  }  

  render() {
    return (
      <div>
        <AddFoodButton addTheFood={this.addFoodhandler}/>
        {this.state.foodlist.map((oneFood, index) => {
                  return (
                      <div>
                          <FoodBox name={oneFood.name} calories={oneFood.calories} image={oneFood.image}  />
                      </div>
                  );
            })
        }
      </div>  
    );
  }       
}

export default App;
