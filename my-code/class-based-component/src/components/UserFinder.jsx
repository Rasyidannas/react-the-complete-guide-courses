import { Fragment, useState, useEffect } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import { Component } from "react";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
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
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  //this is lifecycle methods same with useEffect(...func, [searchTerm])
  componentDidUpdate(prevProps, prevState) {
    // this is avoid for infinity loop
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
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
