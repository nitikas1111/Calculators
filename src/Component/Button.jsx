import React from 'react'
import '../App.css';

export default function Button({onButtonClick}) {
    const bttn = ["C",
      "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
   "=",
    "+",
];
  return (
    <div>
      <div class="buttons">
    {bttn.map((bttn)=>(
        <button className='button' onClick={()=> onButtonClick(bttn)}>{bttn}</button>
    ))
    }
  </div>
    </div>
  )
}
