'use client'
import React, { useState } from 'react'
import { genPageMetadata } from 'app/seo'
import philosophyQuestions from 'app/question-generator/philosophyQuestions'

//export const metadata = genPageMetadata({ title: 'Fragen Generator' })

export default function QuestionGenerator() {
  const [currentQuestion, setCurrentQuestion] = useState({ question: '', description: '' })

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * philosophyQuestions.length)
    setCurrentQuestion(philosophyQuestions[randomIndex])
  }

  return (
    <>
      <div className="h-full py-11 flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Fragen Generator</h1>

          {/* Display a button to get a random question */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
            onClick={getRandomQuestion}
          >
            Get Random Question
          </button>

          {/* Display the selected random question and description */}
          {currentQuestion && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-white">Random Question:</h2>
              <QuestionCard {...currentQuestion} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Component to display individual question and description
const QuestionCard = ({ question, description }) => (
  <div className="bg-gray-800 p-4 my-4 rounded-lg text-white">
    <h2 className="text-4xl font-bold mb-2">{question}</h2>
    <p className="text-xl font-semibold text-gray-200" style={{ lineHeight: 1.6 }}>
      {description}
    </p>
  </div>
)
