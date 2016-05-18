import React from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/app.scss';

/* es6
class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>This is one cool app!</h1>
      </div>
    );
  }
}
*/

// es5
var Main = React.createClass({
  render: function(){
    return (
      <div className="example">
        <h1>This is one cool app!</h1>
      </div>
    );
  }
});

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
