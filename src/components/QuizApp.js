import {quizdata} from "../data/quizdata"
import { useState } from "react"
import QuizResult from "./QuizResult";

const QuizApp = () => {

    const [currentquestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const changeQuestion = () => {
        updateScore();
        if(currentquestion < quizdata.length-1){
            setCurrentQuestion(currentquestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true);
        }
    }
    const updateScore = () => {
        if(clickedOption===quizdata[currentquestion].answer){
            setScore(score+1);
        }
    }

    const resetAll = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    }

    const PreviousQuestionFunction = () => {
        // if(currentquestion> 0 ? setCurrentQuestion(currentquestion-1):null)
        if(currentquestion>0){
            setCurrentQuestion(currentquestion-1);
        }
       
    }
  


    return (
        <div>
            <h1 className="text-center text-white font-extrabold text-5xl mt-5">QUIZZ APP</h1>
            <div className="w-6/12 h-[500px] bg-white border-none rounded-xl shadow-md mx-auto mt-16 flex flex-col gap-5">
                {
                  showResult ?
                 (<QuizResult score={score} total_score={quizdata.length} resetAll={resetAll}/>) :
                 (
                    <>
                    <div className="w-[96%] h-20 bg-[#f0f0f0] mx-auto my-10 shadow-lg rounded-lg flex items-center gap-3">
                            <span className="">{currentquestion+1}.</span>
                            <span className="text-2xl">{quizdata[currentquestion].question}</span>
                    </div>
                    <div className="flex flex-col gap-5">
                            {
                                quizdata[currentquestion].options.map((option,index)=>(
                                    <button className="w-6/12 h-auto mb-5 hover:bg-[#f0f0f0] bg-[clickedOption===i+1?green:white] border-none rounded-xl shadow-md mx-auto"
                                     onClick={()=>setClickedOption(index+1)}
                                     key={index}
                                    >
                                        {option}
                                    </button>
                                ))
                            }
                    </div>
                    <div className="flex justify-center gap-3">
                        <button className="bg-red-900 text-white px-3 py-2  rounded-lg" onClick={PreviousQuestionFunction}>Previous</button>
                        <button className="bg-green-900 text-white px-4 py-2 rounded-lg"
                         onClick={changeQuestion}
                        >
                            Next
                        </button>
                    </div>
                 </>
        )}
            </div>
    
        </div>
    )
}
export default QuizApp;