import Container from './components/Container';
import './App.css'
import Display from './components/Display'
import Button from './components/Button';
import { useState } from 'react';

function App() {

  let [calValue,setCalValue]=useState('');


  const handleClick = (items)=>{
    console.log(`${items} is pressed`);
    try{
     if(items ==='='){
      let newValue=eval(calValue);
      setCalValue(newValue);
     }
     else if(items ==='C'){
      setCalValue('');
     }
     else{
      let newValue= calValue + items;
      setCalValue((newValue));
     }
    }
    catch(err){
      setCalValue('');
    }
  }
  

  return (
    <>
      <Container>
      <Display val={calValue}/>
      <br/>
      <Button handleClick={handleClick}/>

      </Container>
    
    </>
  )
}

export default App
