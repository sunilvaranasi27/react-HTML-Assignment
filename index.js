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
        <table border="1" align="center" height="100" width="500" bgcolor="#CCD4DD">
            <tr>
                <th> Welcome to Registration Page! Please click on the below links
                    <ul>

                        <li>
                            <div align="justify">
                                <a href="Register.html">Register</a>
                            </div>
                        </li>

                    </ul>
                </th>
            </tr>

        </table>
    </form>
            
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
