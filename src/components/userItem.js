import React from "react"
class UserItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {   
        alert("I'm Alive")
    }

    render() {
        return <li
            key={Date.now()}>
            Hello, I'm {this.props.name}, I come from {this.props.country} and my email is {this.props.email}
        </li>
    }
}
export default UserItem