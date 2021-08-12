import React from 'react';
import './burger.css';
class Burger extends React.Component{
  state ={
    ingredients: 0,
    lettuce: 0,
    becon: 0,
    cheese: 0,
    meat: 0,
    lettuceprice: 1,
    beconprice: 2,
    cheeseprice: 1,
    meatprice: 3
  }
  addremoveingredient = (action,item) => {
    let {
      ingredients,
      lettuce,
      becon,
      cheese,
      meat
    } = this.state
    let stateValue;
    switch(item){
      case 'lettuce':{
        stateValue = lettuce;
        break;
      }
      case 'becon':{
        stateValue = becon;
        break;
      }
      case 'cheese':{
        stateValue = cheese;
        break;
      }
      case 'meat':{
        stateValue = meat;
        break;
      }
      default: break;
    }
    if(action === 'more'){
      stateValue = stateValue + 1;
      this.setState({ingredients : ingredients + 1});
    }
    else{
      stateValue = stateValue - 1;
    }
    this.setState({
      [item]: stateValue >= 0 ? stateValue: 0
    });
  }

  burgerContent = () =>{
    let {
      lettuce,
      becon,
      cheese,
      meat
    } = this.state;
    let burger = [];

    // For loop outputing the lettuce
    for(let i=0;i<lettuce;i++){
      burger.push(<div key ={burger.length}  className = 'lettuceSide'></div>);
    }
    for(let i=0;i<becon;i++){
      burger.push(<div key ={burger.length}  className = 'beconSide'></div>);
    }
    for(let i=0;i<cheese;i++){
      burger.push(<div key ={burger.length}  className = 'cheeseSide'></div>);
    }
    for(let i=0;i<meat;i++){
      burger.push(<div key ={burger.length}  className = 'meatSide'></div>);
    }

    return burger;
  }

  totalprice = () =>{
    let {
      ingredients,
      lettuce,
      becon,
      cheese,
      meat,
      lettuceprice,
      beconprice,
      cheeseprice,
      meatprice
    } = this.state
    return (lettuceprice * lettuce + becon * beconprice + cheese * cheeseprice + meat * meatprice)
  }


  render(){
    return(
      <div>
        <div className = 'LeftSide'>
          <div className = 'BurgerBlock'>
            <div className = 'topside'></div>
            {this.burgerContent()}
            <div className = 'bottomside'></div>
          </div>
        </div>

        <div className = 'RightSide'>

        <div className = 'pricetag'>Total Cost: ${this.totalprice()}</div>
          <div className = 'IngredientBlock'>
              <span className = 'Ingredienttext'>Lettuce</span>
              <button onClick = {() => this.addremoveingredient('less','lettuce')} className = 'IngredientBtn1'>Less</button>
              <button onClick = {() => this.addremoveingredient('more','lettuce')} className = 'IngredientBtn2'>More</button>
              <span class = 'IngredientCost'>Cost per piece {this.state.lettuceprice}$</span>
          </div>
          <div className = 'IngredientBlock'>
              <span  className = 'Ingredienttext'>Becon</span>
              <button onClick = {() => this.addremoveingredient('less','becon')} className = 'IngredientBtn1'>Less</button>
              <button onClick = {() => this.addremoveingredient('more','becon')} className = 'IngredientBtn2'>More</button>
              <span class = 'IngredientCost'>Cost per piece {this.state.beconprice}$</span>

          </div>
          <div className = 'IngredientBlock'>
              <span  className = 'Ingredienttext'>Cheese</span>
              <button onClick = {() => this.addremoveingredient('less','cheese')} className = 'IngredientBtn1'>Less</button>
              <button onClick = {() => this.addremoveingredient('more','cheese')} className = 'IngredientBtn2'>More</button>
              <span class = 'IngredientCost'>Cost per piece {this.state.cheeseprice}$</span>

          </div>
          <div className = 'IngredientBlock'>
              <span  className = 'Ingredienttext'>Meat</span>
              <button onClick = {() => this.addremoveingredient('less','meat')} className = 'IngredientBtn1'>Less</button>
              <button onClick = {() => this.addremoveingredient('more','meat')} className = 'IngredientBtn2'>More</button>
              <span class = 'IngredientCost'>Cost per piece {this.state.meatprice}$</span>

          </div>
        </div>
      </div>

    );
  };
}
export default Burger
