import React, {Component} from "react"
import "./Dice.css";

class Dice extends Component {
    render() {
        let cls = `fa-solid fa-8x fa-dice-${this.props.face} ${this.props.rolling ? "shaking" : ""} Dice`
        return (
                <i className={cls}></i>
        )
    }
}

export default Dice;