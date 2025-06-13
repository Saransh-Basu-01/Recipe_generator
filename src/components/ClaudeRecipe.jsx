import React from 'react'
import ReactMarkdown from "react-markdown"

const ClaudeRecipe = ({ recipe, onClose }) => {
  return (
    <section className="flex justify-center mt-10">
      <div className="bg-white shadow-2xl rounded-3xl max-w-2xl w-full p-8 border border-orange-200 relative animate-fade-in">
        {onClose && (
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 text-2xl font-bold focus:outline-none"
            onClick={onClose}
            aria-label="Close recipe"
          >
            &times;
          </button>
        )}
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center drop-shadow">Your AI-Generated Recipe</h2>
        <div className="prose prose-lg max-w-none text-gray-800">
          <ReactMarkdown>{recipe}</ReactMarkdown>
        </div>
      </div>
    </section>
  )
}

export default ClaudeRecipe
