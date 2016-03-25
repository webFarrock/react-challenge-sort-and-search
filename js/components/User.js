import React, { Component } from 'react';
import UserList from './UserList';
import UserActive from './UserActive';

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    selectUser(id){
        this.props.selectUser(id);
    }

    render() {
        let elUserActive = '';

        if(false !== this.props.curUserId){
            console.log(this.props.curUserId);
            let curUser = false;
            this.props.usersData.map((user) => {

                if(user.id == this.props.curUserId){
                    curUser = user;
                }
            });



            elUserActive = <UserActive user={curUser} />
        }

        return (
            <div className="row">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    {elUserActive}
                </div>
                <div className="col-sm-8 col-md-9 col-lg-10">
                    <UserList selectUser={this.selectUser.bind(this)} usersData={this.props.usersData}/>
                </div>
            </div>
        );
    }
}


