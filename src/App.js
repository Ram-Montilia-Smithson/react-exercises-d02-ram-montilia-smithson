import './App.css';
import React from "react"
import UserForm from "./components/userForm"
import UserList from "./components/newLis"
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0,
        users: []
      }
    }

    handleOnChecking() {
      this.setState((state) => {
        return {
          count: state.count + 1,
          users: [...state.users,this.state.count]
        }
      })
    }

    render() {
      return (
        <div>
          <UserForm onChecking={() => this.handleOnChecking()} users={this.state.users}/>
          <UserList users={this.state.users}/>
        </div>
      )
    }
  }
export default App;
