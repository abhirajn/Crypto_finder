import logo from './logo.svg';
import './App.css';
import './index.scss'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Body from './components/Body';
import {FaRupeeSign} from 'react-icons/fa'

function App() {
  const [value, setValue] = useState(true);
  const [response, setResponse] = useState(null);
  const [info, setInfo] = useState(null);
  const [count, setCount] = useState(1);
// var response ;
useEffect(() => {
  const intervalId = setInterval(() => {
    if (count < 60) {
      setCount(count + 1);
    } else {
      setCount(0); // Reset the count to 1 when it reaches 60
    }
  }, 1000); // 1000 milliseconds = 1 second

  return () => {
    clearInterval(intervalId); // Clean up the interval when the component unmounts
  };
}, [count]);

function res(){
  axios.get('http://localhost:8000/getData')

  .then((response) =>{

return  setInfo(response.data);
  })

  .catch((error) =>{
  })

    }

  if(value){
      res();
setValue(!value)
  }
    // console.log(info)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the value between true and false
      setValue(!value);
    }, 60000); // 60,000 milliseconds = 60 seconds

  
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="overflow-scroll h-screen w-screen p-8" style={{backgroundColor : "#191D28"}}>
      
      <div className='grid grid-cols-3 gap-4 justify-items-center '>
        <div className=''><img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="img" /></div>
        <div className='justify-items-center'>
        <button style= {{fontFamily : 'Oswald,sans-serif',fontWeight : "300", fontSize: "16px" , margin : "8px", padding : "6px 15px" , backgroundColor : '#2E3241'}} className='rounded-xl text-white' >INR</button>  
        <button style= {{font : "Oswald,sans-serif", fontSize: "16px" , margin : "8px", padding : "6px 15px" , backgroundColor : '#2E3241'}} className='rounded-xl text-white ' >BTC</button>  
        <button style= {{font : "Oswald,sans-serif", fontSize: "16px" , margin : "8px", padding : "6px 15px" , backgroundColor : '#2E3241'}} className='rounded-xl text-white ' >BUY BTC</button>     
         </div>
        <div className=' flex items-center '>
        <div className='h-7 w-7 bg-white m-5 border rounded item-center'>{count} </div>
          <div className='countdown'><span style={{"--value":60}} className='text-white'></span></div>
        <div className='rounded-xl text-white p-2 inline m-3'  style={{backgroundColor : '#3DC6C1'}} >Connect Telegram</div>
       
        <div>
        <input
  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
  type="checkbox"
  role="switch"
  id="flexSwitchChecked"
  checked />
<label
  className="inline-block pl-[0.15rem] hover:cursor-pointer"
  for="flexSwitchChecked"
  ></label>
        </div>
        </div>
      </div>
      <div className='grid grid-cols-5 justify-items-center' style= {{padding : "10px 0px"}}>
{/* {console.log(info[0].data[0].last)} */}
   <div>
   <div style={{color : "#68CBC6" , font : 'Oswald' , fontSize : "40px"}} className='font-medium'>0.27 % </div>
   <div style={{color : "#E8E6E3" , font : 'Oswald' , fontSize : "20px"}} className='font-medium'>5 Mins</div>
    </div>
    <div>
    <div style={{color : "#68CBC6" , font : 'Oswald' , fontSize : "40px"}} className='font-medium'>0.94 % </div>
   <div style={{color : "#E8E6E3" , font : 'Oswald' , fontSize : "20px"}} className='font-medium'>1 Hour</div>
    </div>
    <div >
      <div className='flex flex-row' > 
      <FaRupeeSign/>
      <div style={{color : "#E8E6E3" , font : 'Oswald' , fontSize : "40px" , padding : "0 0 10px"}} className='font-medium'>23,45,678</div>
      </div>
      <div style={{color : "#E8E6E3" , font : 'Oswald' , fontSize : "10px"}} className='font-medium'>Average BTC/INR net price including commission</div>
    </div>
    <div>
    <div style={{color : "#68CBC6" , font : 'Oswald' , fontSize : "40px"}} className='font-medium'>3.94 % </div>
   <div style={{color : "#E8E6E3" , font : 'Oswald' , fontSize : "20px"}} className='font-medium'>1 Day</div>
    </div>
    <div>
    <div style={{color : "#68CBC6" , font : 'Oswald' , fontSize : "40px"}} className='font-medium'>8.52 % </div>
   <div style={{color : "#E8E6E3" , font : 'Oswald' , fontSize : "20px"}} className='font-medium'>7 Days</div>
    </div>
      </div>
{/* <div className='grid grid-cols-6 '>
<div><h4 className=' cursor-pointer ' style={{color : "#E8E6E3" , fontSize : "24px"}}><span>#</span></h4></div>
  <div><h4 className=' cursor-pointer ' style={{color : "#E8E6E3" , fontSize : "24px"}}><span>Platform</span></h4></div>
  <div><h4 className=' cursor-pointer ' style={{color : "#E8E6E3" , fontSize : "24px"}}><span>Last Traded Price</span></h4></div>
  <div><h4 className=' cursor-pointer ' style={{color : "#E8E6E3" , fontSize : "24px"}}> <span>Buy/Sell Price</span> </h4></div>
  <div><h4 className=' cursor-pointer ' style={{color : "#E8E6E3" , fontSize : "24px"}}> <span>Difference</span> </h4></div>
  <div><h4 className=' cursor-pointer ' style={{color : "#E8E6E3" , fontSize : "24px"}}> <span>Savings</span> </h4></div>


</div> */}
    <div className='table w-screen mt-10'>
      <table>
      <thead>
        <tr>
          <th><h4 className=' cursor-pointer' style={{color : "#E8E6E3" , fontSize : "24px"}}><span>#</span></h4></th>
          <th><h4 className='m-5 cursor-pointer pl-14 pr-10' style={{color : "#E8E6E3" , fontSize : "24px"}}><span>Coins</span></h4></th>
          <th><h4 className='m-5 cursor-pointer px-16' style={{color : "#E8E6E3" , fontSize : "24px"}}><span>Last Traded Price</span></h4></th>
          <th><h4 className='m-5 cursor-pointer px-16' style={{color : "#E8E6E3" , fontSize : "24px"}}> <span>Buy/Sell Price</span> </h4></th>
          <th><h4 className='m-5 cursor-pointer px-15' style={{color : "#E8E6E3" , fontSize : "24px"}}> <span>Difference</span> </h4></th>
          <th><h4 className='m-5 cursor-pointer pl-12' style={{color : "#E8E6E3" , fontSize : "24px"}}> <span>Savings</span> </h4></th>
        </tr>
      </thead>
   {console.log(info)}
  
      <tbody>

      {info !== null ? info.map((newdata , i)=>{
    console.log("hi")
        return(
          
          <>
          <Body  last= {newdata.last} buy = {newdata.buy} sell = {newdata.sell} name = {newdata.name} index = {i+1} />
          </>
        )
   }) : <><h1>loading.....</h1></>}

      </tbody> 

      
      </table>
    </div> 
    </div>
  );
}

export default App;
