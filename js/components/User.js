import React, { Component } from 'react';
import UserList from './UserList';
import UserActive from './UserActive';

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <UserActive />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-10">
                    <UserList usersData={this.props.usersData}/>
                </div>
            </div>
        );
    }
}


