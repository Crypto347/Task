import React,{Component} from 'react';

import classes from './Top.css';

class Top extends Component{
   
state = {
        input:[]
}
    
handleChange=(event)=>{
    this.state.input.push(event.target.value);
    
}

handleClick=()=>{
    this.setState({
        input: this.state.input
    })
}

renderList=()=>{
    const list = this.state.input.map((n,i)=>{
        return (
            <li key ={n+i}>
                {n}
            </li>
        );
    })

    return (
        <ul>
            {list}
        </ul>
    );
}

render() {
    return (
        <div className={classes.Top}>
            {this.renderList()}
            <input type="text" onBlur={this.handleChange}/>
            <button onClick={this.handleClick}>Add</button>
        </div>
    );
}
}

export default Top; 

