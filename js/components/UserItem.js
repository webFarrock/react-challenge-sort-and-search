import React, { Component } from 'react';

export default class UserItem extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        
    }

    render() {
        return (
            <tr>
                <td>
                    <img src={`images/${this.props.user.image}.svg`} className="user-image"/>
                </td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td>{this.props.user.phone}</td>
            </tr>
        );
    }
}



