import React, { useState } from 'react';
import people from './data';


const Review = () => {
  const [index,setIndex]=useState(0)
  const {id,name,job,image,text:info}=people[index]
  console.log(people.length);


const checkNUmmber=(number)=>{
  if(number >people.length-1){
    return 0
  }
  if(number <0){
    return people.length-1
  }
  return number
}

  const prevHandler=()=>{

setIndex((index)=>{
let newIndex=index-1
  return  checkNUmmber(newIndex)
})
    
  }
  const nextHandler=()=>{
    setIndex((index)=>{
      let newIndex=index+1
      return checkNUmmber(newIndex)
    })

  }

  const randomHandler=()=>{
    setIndex(()=>{
      let randomNumber=Math.floor(Math.random()*people.length)
      if(randomNumber===index){
      randomNumber=index+1
      }
      return checkNUmmber(randomNumber)
    })

  }
  return (
    <article>
        <div className="review">
           <div className="img-container">
              <img src={image} alt={name} className='person-img' />
           </div>
           <h4 className="author">{name}</h4>
           <p className="job">{job}</p>
           <p className="info">{info}</p>
        </div>
        <div className="button-container" style={{display:'flex',flexDirection:'column'}}>
        <div >  <button className="prev-btn" onClick={prevHandler}>prev</button>
          <button className="next-btn" onClick={nextHandler}>next</button></div>
         <div> <button className="random-btn" onClick={randomHandler}>suprise me</button></div>
        </div>
    </article>
  )
};

export default Review;
