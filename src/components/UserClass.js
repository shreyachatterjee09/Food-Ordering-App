import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default",
                
            },
        }
          
        //console.log(this.props.name +"child constructor");
    }

   async componentDidMount(){
       // console.log(this.props.name +"child component did mount")
        //API call

        const data = await fetch("https://api.github.com/users/shreyachatterjee09");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        });
    }

   

    render(){
       // console.log(this.props.name +"child render")
       const {name,location,avatar_url}= this.state.userInfo; 
       return(
            <div className="user-card">
                <img src={avatar_url} />
                
                
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: @shreyachatterjee</h4>
            </div>
            )
    }
}

export default UserClass;