import React from 'react'
import './CSS/carcnt.css'

export default function CartCount(props) {
  return (
    <div>
        <div className="square">{props.count}</div>
    </div>
  )
}
