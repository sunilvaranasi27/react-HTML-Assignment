import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <form method="" action="">
        <table border="1" align="center" width="400" bgcolor="#CCCCCC">
            <caption>Registration form</caption>
            <tr>
                <th>Photo </th>
                <td><textarea rows="8" cols="15"></textarea></td>
            </tr>
            <tr>
                <th>Name : </th>
                <td><input type="text" name="fn" id="fn1" maxlength="60" /></td>
            </tr>
             <tr>
                <th>DOB : </th>
                <td><input type="date" /></td>
            </tr>
            
        </table>
        
    </form>
            
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
