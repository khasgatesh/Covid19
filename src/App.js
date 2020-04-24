import React from 'react';

import {Cards,Charts,Countrypicker} from './components';

import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/covid.png';
class App extends React.Component{
  state={
    data:{},
    country:'',
  }

 async componentDidMount(){
    const fetcheddata= await fetchData();
   
    this.setState({data:fetcheddata})
  }

  handlecountrychange=async(country)=>{
    const fetchedData= await fetchData(country);
    
  
    this.setState({data:fetchedData,country:country})
  }
  
  render(){
    const {data,country}=this.state; 
      return(
          <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="covid19"/>
            <Cards data={data}/>
            <Countrypicker handlecountrychange={this.handlecountrychange}/>
            <Charts data={data} country={country}/>
            <footer>&copy; @ Bahubali</footer>
          </div>
          
      )
  }   
}

export default App;