import React, { Component } from 'react';
import UserItem from './UserItem';

export default class UserList extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <table className="user-list table table-striped">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.usersData.map((item) => {
                        return (<UserItem key={item.id} user={item} />)
                    })}
                </tbody>
            </table>
        );
    }
}



