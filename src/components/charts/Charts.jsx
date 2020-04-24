import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import{Line,Bar} from 'react-chartjs-2';
import styles from '../charts/charts.module.css';
const Charts=({data:{confirmed,recovered,deaths},country})=>{
   const [dailyData,setDailyData]=useState([]);

   useEffect(()=>{
       const fetchApI= async()=>{
                  setDailyData( await fetchDailyData());
       }
      
       fetchApI();
   },[]);

   const  lineChart=(
        dailyData.length ? 
        (<Line
           data={{
               labels:dailyData.map(({date})=>date),
               datasets:[{
                   data:dailyData.map(({confirmed})=>confirmed),
                   label:'Infected',
                   borderColor:'#3333f',
                   fill:true
               },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'#3333f',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true
               }],
           }}
         
         
         />) : null
   )
    console.log(confirmed,recovered,deaths)
const barchart=(
    confirmed
    ? (
        <Bar
         data={{
             labels:['Infected','Recovered','Deaths'],
             datasets:[{
                 label:'People',
                 backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                 data:[confirmed.value,recovered.value,deaths.value]
             }]
         }}
         options={{
             legend:{display:false},
             title:{display:true, text:`current status in ${country}`}
         }}
        />
    ):null
)
  
   return(
     <div className={styles.container}>
      {country ? barchart:lineChart}
     </div>
   )
}

export default Charts;