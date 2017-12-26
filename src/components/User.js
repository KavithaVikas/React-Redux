import React from "react";

export default class User extends React.Component{
    render(){
        return(
            <div>
                <h1>User Page</h1>
                <p>Second User :  {this.props.changeUserName}   </p>
                </div>
        )
    }
}