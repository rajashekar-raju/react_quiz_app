import React from 'react'

const QuizResult = ({score,total_score,resetAll}) => {

    const backtoquestionFunction = () => {
        resetAll();
    }
  return (
    <div>
        <div className='flex align-middle justify-center flex-col'>
            <p className='mx-auto text-2xl font-bold'>your score is : {score}</p>  
            <p className='mx-auto text-2xl font-bold'>total score is: {total_score}</p> 
        </div>
        <div className='mt-5'>
            <button className="bg-blue-900 text-white px-4 py-2 mx-[350px] rounded-lg"
            onClick={backtoquestionFunction}
            >
                back
            </button>
        </div>
    </div>

  )
}

export default QuizResult