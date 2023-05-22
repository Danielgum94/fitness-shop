import React from 'react';

export default function Title(props) {
  return (
    <div className='row'>
        <div className="col-10 mx-auto my text-center text-title">
            {/* eslint-disable-next-line */}
            <h1 aria-label="Page Title" className='text-capitalized font-weight-bold'></h1>
            {props.name} <strong className='text-blue'>{props.title}</strong>
        </div>
    </div>
  );
}
