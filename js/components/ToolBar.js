import React, { Component } from 'react';

export default () => {
  return (
    <div className="row">
        <div className="col-sm-12">
            <div className="toolbar">
                <button className="btn btn-default">
                    <i className="icon fa fa-sort-alpha-asc"></i>
                    <span> Sort by name</span>
                </button>
                <button className="btn btn-default">
                    <i className="icon fa fa-sort-numeric-asc"></i>
                    <span> Sort by age</span>
                </button>
            </div>
        </div>
    </div>
  );
}


