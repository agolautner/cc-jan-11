import { useState } from 'react';

function App() {
  // let boolean = true;
  let [boolean, setBoolean] = useState(true);
  
  const changeValue = () => {
    setBoolean(!boolean);
    // boolean = !boolean;
  }
  
  // let content;

  // if (boolean === false) {
  //   content = 'the boolean is false'
  // } else if (boolean === true){
  //   content = 'the boolean is true'
  // } else {
  //   content = 'the variable called boolean is not actually a boolean value :('
  // }

  // let pageName = 'Home';
  let [pageName, setPageName] = useState('Landing');
  // let inputValue = 'Default Value';
  let [inputValue, setinputValue] = useState('');
  const inputShort = inputValue.length < 3;

  const cars = [
    {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
    {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
    {brand: "Mazda", model: "6", topSpeed: "210km/h"},
    {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
    {brand: "Audi", model: "A4", topSpeed: "220km/h"},
  ]

  console.log('render');
  console.log(inputValue);
  console.log(inputValue.length);
  return (
    <div className="App">
      <div>
        <p>Hello World!</p>
        {/* <p>{content}</p> */}
        <p>{boolean ? 'the boolean is true' : 'the boolean is false'}</p>
        <button onClick={changeValue}>CLICK ME</button>
      </div>

      <hr/>
      
      <button onClick={() => setPageName('Home')}>Home</button>
      <button onClick={() => setPageName('About')}>About</button>
      <button onClick={() => setPageName('Landing')}>Landing</button>

      {pageName === 'Home' && <div>text here</div>}
      {pageName === 'About' && <div><h1>text here</h1></div>}
      {pageName === 'Landing' && <div><input type="text" placeholder='input' /></div>}

      <hr/>

      {/* <input type="text" value={inputValue} /> */}
      <input type="text" defaultValue={inputValue} onChange={(e) => setinputValue(e.target.value)}/>
      {/* {inputShort ? <button disabled>SUBMIT</button> : <button>SUBMIT</button>} */}
      <button disabled={inputShort ? true : false}>SUBMIT</button>
      {inputShort && <p>min 3 char!</p>}

      <hr />

      {cars.map((c) => <div key={c.brand + c.model}>
        <p>Brand: {c.brand}</p>
        <p>Model: {c.model}</p>
        <p>Top speed: {c.topSpeed}</p>
      </div>)
      }

    </div>
  );
}

export default App;
