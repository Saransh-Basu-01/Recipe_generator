import React from 'react'

const IngredientList = (props) => {
     const ingredientListItem = props.ingredients.map(ingredient => (
    <li key={ingredient} className="px-4 py-2 font-medium text-green-900 bg-green-100 rounded-md shadow-sm">
      {ingredient}
    </li>
  ))
  return (
    <>
    <section className="px-4 py-6">
          <h2 className="text-3xl font-semibold mt-6 text-center text-gray-800">
            Ingredients on Hand:
          </h2>
          <ul className="max-w-lg mx-auto mt-4 space-y-2 list-disc list-inside text-gray-700">
            {ingredientListItem}
          </ul>
          {props.ingredients.length>3 && <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto mt-8 bg-gray-100 p-6 rounded-3xl shadow-md gap-4 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Ready for a recipe?
              </h3>
              <p className="text-gray-600">
                Generate a recipe from your list of ingredients
              </p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-2xl transition duration-300 w-full sm:w-auto" onClick={props.toggleRecipeShown}>
              Get a Recipe
            </button>
          </div>}
        </section>
    </>
  )
}

export default IngredientList