import React, { Component } from 'react';

export default class User extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const user = this.props.user;

        return (
            <div className="thumbnail">
                <img src={`images/${this.props.user.image}.svg`} />
                <div className="thumbnail-caption">
                    <h3>{user.name}</h3>
                    <table className="user-info table table-responsive">
                        <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>{user.age}</td>
                        </tr>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>{user.image}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>
                                <span>8 </span> <span>{user.phone}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p>
                        <b>Favorite phrase: </b>
                        <span>{user.phrase}</span>
                    </p>
                </div>
            </div>
        );
    }
}


