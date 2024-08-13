'use client'

import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './styles.css' // Import your CSS for animation

const DicePage = () => {
  const [diceResult, setDiceResult] = useState<number | null>(null)
  const [diceType, setDiceType] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const rollDice = (type: number) => {
    setLoading(true)
    setTimeout(() => {
      const result = Math.floor(Math.random() * type) + 1
      setDiceResult(result)
      setDiceType(type)
      setLoading(false)
    }, 1000) // Simulate a delay for the loading animation
  }

  const diceTypes = [4, 6, 8, 10, 12, 20, 100]

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-700 p-4 rounded-2xl">
      <h1 className="text-4xl font-bold mb-8 text-white">Roll the Dice</h1>
      <div className="flex flex-wrap content-start gap-y-7  space-x-8 mb-4">
        {diceTypes.map((type) => (
          <button
            key={type}
            onClick={() => rollDice(type)}
            className={`px-4 py-2 ${
              type === 6 ? 'bg-blue-500' : type === 20 ? 'bg-green-500' : 'bg-gray-500'
            } text-white rounded hover:bg-opacity-75 transition`}
          >
            Roll d{type}
          </button>
        ))}
      </div>
      <CSSTransition in={loading} timeout={300} classNames="fade" unmountOnExit>
        <div className="loader mb-4"></div>
      </CSSTransition>
      <p className="text-2xl text-white">
        {diceType ? `You rolled a d${diceType}: ${diceResult}` : 'Roll a dice to see the result!'}
      </p>
    </div>
  )
}

export default DicePage
