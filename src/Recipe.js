import React from 'react'
import style from "./recipe.module.css";

function Recipe({ title, calories, image, ingredients, cuisineType}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3><em>Calories: </em>{calories.toFixed(2)} Kcals</h3>
            <h3><em>Cuisine Type: </em>{cuisineType}</h3>
            <img className={style.image} src={image} alt="" />
            <h4>Ingredients required:</h4>
            <ol>
                {
                    ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Recipe
