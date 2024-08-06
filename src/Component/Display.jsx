import React from 'react'
import '../App.css';

export default function Display({displayValue}) {
  return (
    <div>
      <input type="text" class="display" value={displayValue}/>
    </div>
  )
}
