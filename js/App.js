import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import User from './components/User';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            curUserId: false
        };

        this.loadUsersData();
    }

    loadUsersData(){
        axios.get('../data.json')
             .then(data => {
                 let curUserId = false;
                 
                 if (data.data instanceof Array && data.data.length){
                     curUserId = data.data[0].id;
                 }
                 console.log('curUserId = '+curUserId);
                 
                 this.setState({
                    usersData: data.data,
                    curUserId: curUserId,
                });
             })
             .catch((response) => {console.log('get data error'); console.log(response);
             });
    }


    selectUser(id){
        this.setState({
            curUserId: id
        });
    }


    render() {
        return (
            <div className="container-fluid app">
                <SearchBar />
                <ToolBar />
                <User selectUser={this.selectUser.bind(this)} usersData={this.state.usersData} curUserId={this.state.curUserId} />
            </div>
        );
    }
}
