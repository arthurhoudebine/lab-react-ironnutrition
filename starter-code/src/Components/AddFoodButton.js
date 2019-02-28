import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class AddFoodButton extends Component {
    constructor(){
        super();
        this.state = {
            render:false,
            name: '',
            calories: '',
            picture: ''
        }
    }

    handleAddClick = () =>{
        const render2=!this.state.render;
        this.setState({render:render2});
    }
    
    handleFormSubmit = (event) => {
        event.preventDefault();

        this.props.addTheFood(this.state);

        // for reset
        this.setState({     
            name: '',
            calories: '',
            picture: ''
        })
    }  

    handleChange = (event) => {
        console.log('handlechange')
        let { name, value } = event.target;

        console.log(name, value)

        this.setState({[name]: value});
      }

    render(){
        const {name, calories, image} = this.props;
        return (
            <div>
                <a class="button is-primary" onClick={this.handleAddClick}>Add New Food</a>
                
                {
                    this.state.render ?
                    <div>
                    <form onSubmit={this.handleFormSubmit}>
                    <p>Name</p>
                    <input class="input" type="text" placeholder="Name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    <p>Calories</p>
                    <input class="input" type="number" placeholder="number of calories" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
                    <p>Image URL</p>
                    <input class="input" type="text" placeholder="ImageURL" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" value="Submit" />
                    </form>
                    </div>
                    :
                    <div></div>
                }
            </div>
        )
    };

}

export default AddFoodButton;



