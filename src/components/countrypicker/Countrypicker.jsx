import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from '../countrypicker/countrypicker.module.css';
import {fetchcountries} from '../../api';
const Countrypicker=({handlecountrychange})=>{
const [fetchedCountries,setFetchedCountries]=useState([])
    useEffect(()=>{
         const fetchapi= async ()=>{
                   setFetchedCountries(await fetchcountries())
         }
         fetchapi(); 
    },[setFetchedCountries]);

   return(
     <FormControl className={styles.formcontrol}>
         <NativeSelect defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
             <option value="">Global</option>
             {fetchedCountries.map ((country,i)=><option key={i} value={country}>{country}</option>)}
         </NativeSelect>
     </FormControl>
   )
}

export default Countrypicker;