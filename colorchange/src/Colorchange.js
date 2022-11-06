import React,{Component} from 'react';
class Colorchange extends Component{
    constructor(props) {
        super(props);
        this.state={color:"red"} 
    }
    handlecolor=()=>{
        this.setState({color:"green"})
    }
    handlecolor1=()=>{
        this.setState({color:"blue"})
    }
    render(){
        return(
            <div> 
                <h1 onMouseOver={this.handlecolor} onMouseOut={this.handlecolor1}
                style={this.state}>WELCOME</h1>
            </div>
        )
    } 
}
export default Colorchange;