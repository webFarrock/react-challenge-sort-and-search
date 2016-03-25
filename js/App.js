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
            curUserId: false,
            sortBy: false,
            order: false,
            searchByNameValue: '',
        };

        this.loadUsersData();
    }

    sortByName(){
        const order = !this.state.order;
        const usersData = this.state.usersData.sort((a, b) => {return (order ? 1 : -1)*((a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)});
        const curUserId = usersData[0].id;

        this.setState({
            order: order,
            usersData: usersData,
            curUserId: curUserId
        });
    }

    sortByAge(){
        const order = !this.state.order;
        const usersData = this.state.usersData.sort((a, b) => (order ? 1 : -1)*(a.age - b.age));
        const curUserId = usersData[0].id;

        this.setState({
            order: order,
            usersData: usersData,
            curUserId: curUserId
        });
    }

    loadUsersData(){

        axios.get('../data.json')
             .then(data => {
                 let curUserId = false;

                 if (data.data instanceof Array && data.data.length){
                     curUserId = data.data[0].id;
                 }

                 this.setState({
                    usersDataRaw: data.data,
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

    searchByName(val){
        console.log(val);
        
        
        let usersData = this.state.usersDataRaw;

        if(val){
            usersData = usersData.filter((item) => {if(-1 !== item.name.toLowerCase().indexOf(val.toLowerCase())) return true; });
        }

        const curUserId = usersData[0] ? usersData[0].id : false;
        

        this.setState({
            searchByNameValue: val,
            usersData: usersData,
            curUserId: curUserId
        });
    }


    render() {
        return (
            <div className="container-fluid app">
                <SearchBar searchByNameValue={this.state.searchByNameValue} searchByName={this.searchByName.bind(this)} />
                <ToolBar sortByName={this.sortByName.bind(this)} sortByAge={this.sortByAge.bind(this)} />
                <User selectUser={this.selectUser.bind(this)} usersData={this.state.usersData} curUserId={this.state.curUserId} />
            </div>
        );
    }
}
