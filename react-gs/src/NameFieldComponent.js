import React, { Component} from "react";


export default class NameFieldComponent extends Component {
    constructor(props) {
        super(props);
        this.value = this.props.value;
        this.rowIndex = this.props.rowIndex;
        this.id = this.props.data.id;
        this.api = props.api;
        this.state = {
            flaggedForreview: false
        };
    }

    flag = () =>{
        alert(`${this.value} is flagged for`)
    }

    render() {
        return (
            <div>
                <span style={{fontWeight: this.rowIndex %2 ? "500" : "700"}}>{this.value}</span>
                {this.value}!
                <button type="button" style={{marginLeft:"5px"}} onClick={this.flag}> Flag for Review</button>
                <button type="button" style={{marginLeft:"5px"}} onClick={this.flag}> Flag for Review</button>
            </div>
        
        );
    }
}