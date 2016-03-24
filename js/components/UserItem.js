import React, { Component } from 'react';

export default class UserItem extends Component {
    constructor(props) {
        super(props);
    }

    selectUser(){
        this.props.selectUser(this.props.user.id);
    }

    render() {
        return (
            <tr onClick={this.selectUser.bind(this)}>
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



