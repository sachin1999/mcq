import React, { useState } from 'react'
const Cards = (props) => {
    let questions = props.questions;
    const [showResult,setShowResult]= useState(false);
    let [score,setScore]=useState(0);
    const [index,setIndex] = useState(0);
    const [option,setOption]= useState(null);
    let question = questions[index];
    function backHandler(){
        if(index-1<0){
            setIndex(0);
        }
        else{
            setIndex(index-1);
        }
        if(option!==question.answer){
            setScore(score-10);
        }
    }
    function nextHandler(){
       
        if(index+1>=questions.length){
            submitHandler();
            // setIndex(questions.length-1);
        }
        else{
            setIndex(index+1);
        }
        if(option===question.answer && score<80){
            setScore(score+10);
        }
        console.log(option);
        setOption(null);
    }
    function submitHandler(){
       
        if(option===question.answer && score<80){
            setScore(score+10);
        }

        setShowResult(true);
    }
    function changeHandler(option){
        setOption(option);
    }
    function restartHandler(){
        setIndex(0);
        setScore(0);
        setShowResult(false);
        setOption(false);
    }
    console.log(score);
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-xl'>
        {/* <Card question={questions[index]}></Card> */}
        {showResult ? (
            <div>
            <div>Total Score : {score}/80</div>
            <div className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer 
         rounded-md font-bold text-white text-lg w-[100px] h-[30px] mx-auto my-4'>
                <button onClick={restartHandler}>Restart again</button>
            </div>
            </div>
        ) : (
            <div><div className='flex flex-col md:relative'>
        <div className='text-center mt-7'>
        <p className='font-bold text-xl capitalize'>Q{question.id}. {question.Q}</p>
        </div>
          <div className='flex flex-col text-left my-8'>
           <ul>
            {question.options.map((value,index) => (
                <li key={index}>
                <label>
                <input className='mx-2' type='radio' name="option" value="A" checked={option === index} 
                onChange={() => changeHandler(index)} ></input>{value}</label><br/>
                </li>
            )) }
           </ul>
          </div>
        </div>
        <div className='flex mx-auto font-bold gap-3 mt-5 text-2xl text-violet-400  justify-center '>
        <button onClick={backHandler} className='cursor-pointer hover:text-violet-500 '>back</button>
        <button onClick={nextHandler} className='cursor-pointer hover:text-violet-500'>next</button>
        </div>
        <div className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer 
         rounded-md font-bold text-white text-lg w-[100px] h-[30px] mx-auto my-4'>
         <button onClick={submitHandler}>Submit</button></div>
         </div>
)}
        </div>
    
  )
}

export default Cards