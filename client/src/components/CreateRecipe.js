import React, { useState } from "react";
import styled from "styled-components";
import addNew from "../img/add-new.svg";
import { MainButton } from "../Styles";

const CreateRecipe = () => {
  const [tags, setTags] = useState([]);
  const createTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags([...tags, e.target.value]);
      console.log(tags);
      e.target.value = "";
    }
  };

  const removeTag = (e) => {
    console.log(e.target);
    const index = tags.indexOf(e.target.parentElement.firstChild.innerText);
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)]);
    console.log(index);
  };

  return (
    <>
      <h1 className="form-title">
        Create Your <span>Recipe</span>
      </h1>
      <StyledForm>
        <input
          type="text"
          autoCapitalize="words"
          className="text-input"
          name="title"
          placeholder="Title*"
          autoComplete="off"
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

        <h2 className="ingredient-header">Add Ingredients</h2>
        <div className="ingredient">
          <input type="text" className="text-input amount" placeholder="Amt*" />
          <select
            name="unit"
            className="text-input unit"
            id=""
            placeholder="unit*"
          >
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
        <div className="ingredient">
          <input type="text" className="text-input amount" placeholder="Amt*" />
          <select
            name="unit"
            className="text-input unit"
            id=""
            placeholder="unit*"
          >
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

        <div className="add-ingredient">
          <img src={addNew} className="add-item" alt="" />
          <p>Add another ingredient</p>
        </div>

        <h2 className="add-procedure">Add Procedures</h2>
        <div className="procedure">
          <h3 className="step">Step 1.</h3>
          <textarea
            name="procedure"
            className="procedure-text"
            cols="50"
            rows="2"
            placeholder="Add a procedure*"
          ></textarea>
        </div>
        <div className="procedure">
          <h3 className="step">Step 2.</h3>
          <textarea
            name="procedure"
            className="procedure-text"
            cols="50"
            rows="2"
            placeholder="Add a procedure"
          ></textarea>
        </div>

        <div className="add-ingredient">
          <img src={addNew} className="add-item" alt="" />
          <p>Add another step</p>
        </div>

        <h2 className="tags-header">Add Tags</h2>
        <div className="container">
          <div className="tag-container">
            {tags.map((tag, idx) => (
              <div className="tag">
                <span className="tag-text">{tag}</span>
                <i
                  onClick={(e) => removeTag(e)}
                  dataValue={idx}
                  className="fas fa-times"
                ></i>
              </div>
            ))}

            <input
              type="text"
              className="tag-input"
              placeholder="Type tag and press Enter"
              onKeyPress={(e) => createTag(e)}
            />
          </div>
        </div>

        <MainButton>Submit</MainButton>
      </StyledForm>
    </>
  );
};

//Styled Components

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 3rem auto;

  button {
    align-self: center;
    margin: 3rem;
  }

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

  .ingredient-header {
    align-self: center;
    position: relative;
    margin: 1rem;

    &::after {
      content: "";
      width: 125%;
      height: 0.3rem;
      background-color: #3b7c0b;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .ingredient {
    margin: 0.5rem 0;
    display: flex;

    .amount {
      width: 15%;
      margin-right: 1rem;
    }

    .unit {
      margin-right: 1rem;
    }

    .ingredient-input {
      margin-right: 1rem;
      flex: 3 1;
    }

    .alt-input {
      flex: 3 1;
    }
  }

  .add-ingredient {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;

    img {
      cursor: pointer;
    }

    p {
      margin-left: 0.8rem;
      color: #969696;
      cursor: pointer;
    }
  }

  .add-procedure {
    align-self: center;
    margin: 1.5rem 1rem 1rem;
    position: relative;

    &::after {
      content: "";
      width: 125%;
      height: 0.3rem;
      background-color: #3b7c0b;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .procedure {
    display: flex;
    align-items: center;
    margin: auto;

    .procedure-text {
      margin: 0.5rem 1rem;
    }

    h3 {
      color: #969696;
    }
  }

  .tags-header {
    align-self: center;
    margin: 2rem 1rem 1rem;
    position: relative;

    &::after {
      content: "";
      height: 0.3rem;
      width: 125%;
      background-color: #3b7c0b;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .tag-container {
    border: 1px solid black;
    padding: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    flex: 1 1 1.5rem;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    border: 1px solid black;
    margin: 0.25rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    background-color: #3b7c0b;

    span {
      color: #fff;
    }

    i {
      margin-left: 0.5rem;
      cursor: pointer;
      color: #fff;
    }
  }

  .tag-input {
    flex: 1;
    padding: 0.25rem;
    font-size: 1.2rem;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
export default CreateRecipe;
