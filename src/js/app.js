import React from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/app.scss';
import http from 'http';

// es5
var Main = React.createClass({
  getInitialState: function(){
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
    this.loadData();
  },
  render: function(){
    return (
      <div className="example container">
        <h1>This is three cool app!</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
});

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
