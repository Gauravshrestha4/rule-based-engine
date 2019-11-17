import React from "react";
import Modal from './Modal';
import Table from './Table';
import axios from 'axios';
import './App.css'

const getTableData=()=>{
  //write api call to get table data
  return  axios.get('url/endpoint')
}
class App extends React.Component {
  state={
    formData:{},
    tableData:[]
  }
  componentDidMount(){
    getTableData().then(res=>{
      //set table data in state
      this.setState({
        tableData:res.data.data
      })
    })
  }
  handleSubmit=(formData)=>{
    //api call to post form data
    //after successfull post call getTableData api 
  }
  render(){
  
  return (
   <>
    <Modal onSubmit={this.handleSubmit}/>
    <Table/>
   </>
  );
}
}

export default App;
