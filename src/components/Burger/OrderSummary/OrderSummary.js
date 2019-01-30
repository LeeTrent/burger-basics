import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import { cpus } from 'os';

////////////////////////////////////////////////////
// OrderSummary could be a functional component 
// because OrderSummary is wrapped inside of Modal 
// which is a class component that implements 
// lifecycle  method 'shouldComponentUpdate()' 
// to check if both Modal and OrderSummary 
// should be rendered because of a state change.
////////////////////////////////////////////////////
class OrderSummary extends Component {   
 
    componentWillUpdate() {
        console.log("[OrderSummary][componentWillUpdate()]");
    }
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });        
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger"  clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );        
    }
}

export default OrderSummary;