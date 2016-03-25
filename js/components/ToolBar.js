import React, { Component } from 'react';

export default class ToolBar extends Component {
    constructor(props) {
        super(props);
    }

    sortByName(){
        this.props.sortByName();
    }

    sortByAge(){
        this.props.sortByAge();
    }

    render() {
        const icoNameClass =  this.props.orderName ? "icon fa fa-sort-numeric-asc" : "icon fa fa-sort-numeric-desc" ;
        const icoAgeClass = this.props.orderAge ? "icon fa fa-sort-alpha-asc" : "icon fa fa-sort-alpha-desc" ;
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="toolbar">
                        <button className="btn btn-default" onClick={this.sortByName.bind(this)}>
                            <i className="icon fa fa-sort-alpha-asc"></i>
                            <span> Sort by name</span>
                        </button>
                        <button className="btn btn-default" onClick={this.sortByAge.bind(this)}>
                            <i className="icon fa fa-sort-numeric-asc"></i>
                            <span> Sort by age</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


