/*
import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

const fname = "SANEHA";
const lname = "GARG";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/300/300";
const links = "https://www.google.com";
ReactDom.render(
<>
<h1 className="heading">Pick your Netflix Series</h1>
<h2 className='heading2'>Here is the list</h2>
<br></br>
<ol className='elements'>
  <li>Friends</li>
  <li>Manifest</li>
  <li>Class</li>
  <li>Sex Education</li>
  <li>Moneyheist</li>
  <li>Stranger Things</li>
  <li>Wednesday</li>
  <li>Squid Game</li>
</ol>
<br></br>
<br></br>
<div className='writer'>
<h3>{`- ${fname} ${lname}`}</h3>
<p>&nbsp;&nbsp;&nbsp;Date: {currDate}</p>
<p>&nbsp;&nbsp;&nbsp;Time: {currTime}</p>
</div>

<p className=" pic "contentEditable = "true"> Random pics: </p>
<div className='img-div'>
<img src = "https://picsum.photos/200/300" alt="randomImages"/>
<img src = {img1} alt="randomImages"/>
<a href={links} target="_google"> 
<img src = {img2} alt="randomImages"/>
</a>
</div>
</>,
document.getElementById('root') );
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';

const cssStyle = { }
if (currDate>=1 && currDate <12){
  greeting = 'Good Morning';
  cssStyle.color = "Green";
} else if (currDate >=12 && currDate <19){
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}else{
  greeting = "Good Night";
  cssStyle.color = "Black";
}

ReactDOM.render(
  <>
  <div>
  <App />
<h1>Hello Sir, <span style = {cssStyle}> {greeting} </span> </h1>
</div>
</>,
document.getElementById('root')
);
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

ReactDOM.render( <App />,document.getElementById('root'));
*/
 

// NETFLIX SERIES 
/*
import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import "./index.css";
import SData from './SData';

ReactDom.render(
<>
<h1> NETFLIX SERIES :-</h1>
<section className='series'>
<Card
imgsrc={SData[0].imgsrc}
sname= {SData[0].sname}
link= {SData[0].link}  />
<Card 
  imgsrc={SData[1].imgsrc}
sname= {SData[1].sname}
link= {SData[1].link} 
/>
<Card 
  imgsrc={SData[2].imgsrc}
sname= {SData[2].sname}
link= {SData[2].link} 
/>

<Card 
  imgsrc={SData[3].imgsrc}
sname= {SData[3].sname}
link= {SData[3].link} 
/>
</section>
<section className='series2'>
<Card 
 imgsrc={SData[4].imgsrc}
sname= {SData[4].sname}
link= {SData[4].link} 
/>
<Card 
 imgsrc={SData[5].imgsrc}
sname= {SData[5].sname}
link= {SData[5].link} 
/>
<Card 
  imgsrc={SData[6].imgsrc}
sname= {SData[6].sname}
link= {SData[6].link} 
/>
<Card 
 imgsrc={SData[7].imgsrc}
sname= {SData[7].sname}
link= {SData[7].link} 
/>
</section>
<section className='series3'>
<Card 
  imgsrc={SData[8].imgsrc}
sname= {SData[8].sname}
link= {SData[8].link} 
/>
<Card 
 imgsrc={SData[9].imgsrc}
sname= {SData[9].sname}
link= {SData[9].link} 
/>
<Card 
  imgsrc={SData[10].imgsrc}
sname= {SData[10].sname}
link= {SData[10].link} 
/>
<Card 
 imgsrc={SData[11].imgsrc}
sname= {SData[11].sname}
link= {SData[11].link} 
/>
</section>
</> , 
document.getElementById('root'));

// END HERE
*/

//SHORTCUT OF NETFLIX SERIES
/*
import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import "./index.css";
import SData from './SData';

ReactDom.render(
<>
<h1> NETFLIX SERIES :-</h1>
{SData.map((val) => { 
  return(
  <Card
imgsrc={val.imgsrc}
sname= {val.sname}
link= {val.link}  
/>
 );
})}
</> , 
document.getElementById('root')
);
*/


// FORMS

// import React from 'react';
// import ReactDom from 'react-dom';
// import "./index.css";
// import App from './App';

// ReactDom.render(<App />, document.getElementById('root'));



// to do list
/*
import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import App from './App';
import Todolist from './Todolist';

ReactDom.render(<Todolist/>, document.getElementById('root'));
*/

// keep clone

import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import App from './App';

ReactDom.render(<App/>, document.getElementById('root'));
