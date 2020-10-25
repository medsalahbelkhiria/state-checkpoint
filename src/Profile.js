import React from 'react';
import avatar from './avatar.jpg';

class Profile extends React.Component {

state = {
    fullName : '  ',
    bio : ' ',
    imgSrc : ``,
    show : ' false '
}

 handleClick = () => {

    this.setState({show : ! this.state.show})

    if(this.state.show) {
        this.setState({
            fullName : 'I am Mohamed Salah Belkhiria ',
            bio : ' a GOMYCODE student in full stack web development field. ',
            imgSrc : `${avatar}` 
    }) 
    }
    else {
        this.setState({
            fullName : '  ',
            bio : '  ',
            imgSrc : ` `,
        }) 
    }
 
 
}

    render(){

        return(

               
            <>
                 <h1 style={{textAlign:"center"}}> { this.state.fullName} </h1>
                 <h2>{this.state.bio}</h2>
                 <img src= {this.state.imgSrc}  style={{borderRadius : "100px", margin:"20px auto", height:"250px"}}  />
                 <br />
                 <button onClick={this.handleClick} style={{padding :"10px", borderRadius:"10px", border:"black solid 1px", backgroundColor:"teal"}}>Show profile</button>
                 
            </>   
        )
    }
}

export default Profile