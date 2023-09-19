import React from 'react'

export default function Body(props) {
  return (
    <>

<tr className='bg-gray-700 w-screen border rounded-lg  '>
  <td className='align-center'>
    <h4 className='text-2xl font-medium px-4' style={{color : "#E8E6E3"  , fontFamily : "Oswald" }}>{props.index}</h4>
    </td>
    <td>
      <h4 className='text-2xl mx-5  font-medium pl-14 pr-15 py-2' style={{color : "#E8E6E3"  , fontFamily : "Oswald" }}><span className='exchange-name'>{props.name.slice(0,3)}</span></h4>
    </td>
    <td>
      <h4 className='text-2xl mx-5 font-medium px-16' style={{color : "#E8E6E3",fontFamily : "Oswald"}}> {props.last}</h4>
    </td>
    <td>
      <h4 className='text-2xl mx-5 font-medium px-16' style={{color : "#E8E6E3",fontFamily : "Oswald"}}><span>{props.buy} / {props.sell} </span>
      </h4>
    </td>
    <td>
      <h4 className='text-2xl mx-5 font-medium px-16'style={{color : "#E8E6E3",fontFamily : "Oswald"}}>{((props.sell -props.buy)/props.sell * 100).toFixed(2)} %</h4>
    </td>
    <td>
      <h4 className='text-2xl mx-5 font-medium pl-16' style={{color : "#E8E6E3" ,fontFamily : "Oswald"}}>{(props.sell -props.buy ).toFixed(2)}</h4>
    </td>
  </tr>
    </>
  )
}
