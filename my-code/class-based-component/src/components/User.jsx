import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  //this method is will be render/show by react 
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
