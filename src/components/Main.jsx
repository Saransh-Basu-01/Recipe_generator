import React from 'react'
import { useState } from 'react'
import IngredientList from './IngredientList'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from './ai'

const Main = () => {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("")
  const [showRecipe, setShowRecipe] =useState(true)

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients)
    setRecipe(generatedRecipe)
    setShowRecipe(true)
  }

  function handleCloseRecipe() {
    setShowRecipe(false)
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim().toLowerCase()
    // Prevent adding duplicates
    const alreadyExists = ingredients.some(
      ingredient => ingredient.toLowerCase() === newIngredient
    )
    if (alreadyExists) {
      alert("This ingredient is already added!")
      return
    }
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <main className="container min-h-screen mx-auto px-4">
      <form
        action={addIngredient}
        className="flex flex-col sm:flex-row justify-center gap-4 mt-20"
      >
        <input
          type="text"
          placeholder="g.oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
          className="px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-[600px] sm:min-w-[250px]"
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 w-full sm:w-auto"
        >
          + Add ingredient
        </button>
      </form>

      {ingredients.length > 0 && <IngredientList ingredients={ingredients} toggleRecipeShown={getRecipe} />}
      {showRecipe && recipe && <ClaudeRecipe recipe={recipe} onClose={handleCloseRecipe} />}
    </main>
  )
}

export default Main
