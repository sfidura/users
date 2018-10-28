import React, {Component} from "react";
import UsersList from "./UsersList";
import './Users.css';

class Users extends Component{
    constructor(props){
        super(props);
        this.refName = React.createRef();
        this.refSurname = React.createRef();

        this.state = {
            usersList: [],
        }
    }

    addUser = (event) => {
        event.preventDefault();
        console.log(this.refName.current.value + " " + this.refSurname.current.value);

        let newUser = {
            key: Date.now(),
            userName: this.refName.current.value,
            userSurname: this.refSurname.current.value, 
        }

        this.setState(() => {
            return({
                usersList: this.state.usersList.concat(newUser),
            })
            
        })

    }

    removeUser = (userKey) => {

        let filteredUsers = this.state.usersList.filter(user => user.key !== userKey);

        this.setState({
            usersList: filteredUsers,
        })

        // console.log(userKey);
    }

    render() {
        return(
            <div className="users-main">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    <input type="text" id="name" placeholder="Imię" ref={this.refName} />
                    <input type="text" id="surname" placeholder="Nazwisko" ref={this.refSurname} />
                    <button type="submit" id="addUser">Dodaj użytkownika</button>
                </form>

                <UsersList usersList = {this.state.usersList}  removeUser = {this.removeUser}/>
                
            </div>
        )
    }
}

export default Users;