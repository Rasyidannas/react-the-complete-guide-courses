import { Fragment, useState, useEffect } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import { Component } from "react";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  //this is lifecyle for mount(actually for API) and only run once same with useEffect(...func, [])
  componentDidMount() {
    // Send HTTP request...
    this.setState({ filteredUsers: this.context.users });//this.context can acces to contextType for user-context.jsx
  }

  //this is lifecycle methods same with useEffect(...func, [searchTerm])
  componentDidUpdate(prevProps, prevState) {
    // this is avoid for infinity loop
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.statesearchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          {/* bind this is for create new function and it is will work cause searchChangeHandler has this and the argument in this connect in function this */}
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
