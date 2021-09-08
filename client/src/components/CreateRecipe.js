import React from "react";
import styled from "styled-components";

const CreateRecipe = () => {
  return (
    <>
      <h1 className="form-title">
        Create Your <span>Recipe</span>
      </h1>
      <StyledForm>
        <input
          type="text"
          className="text-input"
          name="title"
          placeholder="Title*"
        />
        <label htmlFor="title">Give your recipe a title</label>

        <textarea
          name="description"
          id=""
          cols="50"
          rows="5"
          placeholder="Description"
        ></textarea>
        <label htmlFor="description">Max 500 characters</label>

        <div className="yield-prep-cook">
          <div className="yield">
            <input
              type="text"
              className="text-input yield-inout"
              name="yield"
              placeholder="Yield"
            />
            <label htmlFor="yield">How many does this recipe serve</label>
          </div>
          <div className="time">
            <input
              type="text"
              className="text-input"
              name="prep-time"
              placeholder="Prep time"
            />
            <p>min</p>
          </div>

          <div className="time">
            <input
              type="text"
              className="text-input"
              name="cook-time"
              placeholder="Cook time"
            />
            <p>min</p>
          </div>
        </div>

        <h2>Add Ingredients</h2>
        <div className="ingredient">
          <input type="text" className="text-input amount" placeholder="Amt*" />
          <select name="unit" className="text-input" id="" placeholder="unit*">
            <option value="tbsp">Tbsp</option>
            <option value="tsp">Tsp</option>
            <option value="oz">oz.</option>
            <option value="cup">cup</option>
          </select>
          <input
            type="text"
            className="text-input ingredient-input"
            placeholder="Ingredient*"
          />
          <input
            type="text"
            className="text-input alt-input"
            placeholder="Alt Ingredient"
          />
        </div>
      </StyledForm>
    </>
  );
};

//Styled Components

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;

  .yield-prep-cook {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .yield {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-right: 1rem;
  }

  p {
    display: inline-block;
  }
`;
export default CreateRecipe;
