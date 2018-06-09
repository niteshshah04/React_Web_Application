import React from 'react';
import Axios from 'axios';

const Card = (props) => {
    return(
        <div>
        {props.name}
        </div>
    );
}

const CardList = (props) => {
    console.log("fdgdfgdgf --- > ");
    return(
        <div>
            {props.text.map(card => <Card>{card}</Card>)}
        </div>
    );
}

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : ''};
        this.state = {nitesh : ''};
        this.state = {shah : ''};
        this.state = {data : {}};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({nitesh : event.target.value});
    }
    
    handleChange1(event){
        this.setState({shah : event.target.value});
    }
    
    handleSubmit(event){
        console.log("First Name > " + this.state.nitesh);
        console.log("Last Name  > " + this.state.shah);
        event.preventDefault();   
           axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            console.log(response.data);
            const respArray = response.data;   
            this.setState({data: response.data});
               return(<div><CardList text={this.state.data} /></div>);
          });
    }
        
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <div >
                    <input type="text" required  value={this.state.nitesh} onChange={this.handleChange} ></input>
                    <br></br>
                    <input type="text" required value={this.state.shah} onChange={this.handleChange1}></input>
                    </div>
                </label>
                    <input type="submit" value="Submit"></input>
            </form></div>
        );
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
            <h1>Nitesh</h1>
            <NameForm />
           
            </div>
        );
    }
}



//const Stars = (props) => {
//    return(
//        <div>
//        <h1> Nitesh</h1>
//        <button onClick={nitesh}>save</button>
//        </div>
//        
//    );
//}
//
//
//const DisplayList = [1,2,3,4,5];
//
//const listItems = DisplayList.map((number) => <li> {number} </li>);
//
//function nitesh(){
// 
//    console.log("hi");
//}
//
//
//class App extends React.Component{
//    
//    render(){
//        return(
//            <div>
//            <Stars />
//            <ul>{listItems}</ul>
//            </div>
//        );
//    }
//}



export default App;