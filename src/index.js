import React from 'react';
import ReactDOM from 'react-dom';

const name="Mahesh";
const d=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();
ReactDOM.render(
<>
<h1>Hello {name}</h1>
<p>Current Date is= {d}</p>
<p>Current time is {time}</p>
</>
,document.getElementById('root'));