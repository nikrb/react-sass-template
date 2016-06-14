import React from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/app.scss';
import http from 'http';

// require('../../node_modules/bootstrap/dist/css/bootstrap.css');

// es5
var Main = React.createClass({
  getInitialState: function(){
    console.log( "@getInitialState");
    return { data: []};
  },
  loadData: function(){
    console.log( "@loadData");
    http.get( '/api/comments' , function( res){
      console.log( "got response:", res);
      this.setState( { data: res});
    });
  },
  componentDidMount(){
    console.log( "@componentDidMount");
    this.loadData();
  },
  render: function(){
    return (
      <div className="example container">
        <h1>This is two cool app!</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
});

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
