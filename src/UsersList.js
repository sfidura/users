import React, {Component} from "react";


class UsersList extends Component{

    createUser = (user) =>{
        return( <li key={user.key} onClick={() => this.removeUser(user.key)}>
                    {user.userName} {user.userSurname}
                </li>)
    }

    removeUser = (userKey) => {
        // console.log(userKey);
        this.props.removeUser(userKey);
    }

    render(){

        let usersList = this.props.usersList;

        let usersLI = usersList.map( this.createUser );

        return(
            <ul className="the-list">
                {usersLI}
            </ul>
        )
    }
}

export default UsersList;