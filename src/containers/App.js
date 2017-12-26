import React from "react";
import {User} from "../components/User";
import {Main} from "../components/Main";
import {connect} from "react-redux";

class APP extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name: ""
        }
    }

changeName(){
    this.props.changeName(this.state.name);
}
updateName(name){
    this.setState({
        name:name.target.value
    })
}

    render() {
        return (
            <div>
                <h4>UserName</h4> : <input type = "text" value={this.state.name} onChange = {(name) => this.updateName(name)}/>
                <Main changeUser ="Kavitha"/>
                <User changeUserName ={this.props.user.name}/>
                <button onClick = {this.changeName.bind(this)}> Change Name</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        user:state.userReducer
    }

    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeName: (name) => {
            dispatch({
                type:"SET_NAME",
                payload:name
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(APP);


