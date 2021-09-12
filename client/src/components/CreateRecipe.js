import React, { useState } from "react";
import styled from "styled-components";
import addNew from "../img/add-new.svg";
import { MainButton } from "../Styles";

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    preptime: "",
    cooktime: "",
    ingredients: [],
    procedures: [],
    tags: [],
  });

  const { title, description, preptime, cooktime, procedures, tags } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const [tag, setTags] = useState([]);
  const createTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags([...tag, e.target.value]);
      e.target.value = "";
    }
  };
  const removeTag = (e) => {
    console.log(e.target);
    const index = tag.indexOf(e.target.parentElement.firstChild.innerText);
    setTags([...tag.slice(0, index), ...tag.slice(index + 1)]);
  };
  const [ingredient, setIngredients] = useState([]);
  const addIngredient = (e) => {
    setIngredients([...ingredient, 1]);
  };
  const removeIngredient = (e) => {
    const index = e.target.parentElement.id;
    console.log(index);
    setIngredients([
      ...ingredient.slice(0, index),
      ...ingredient.slice(index + 1),
    ]);
  };

  const [procedure, setProcedures] = useState([]);

  const addProcedure = (e) => {
    setProcedures([...procedure, 1]);
  };
  return (
    <>
      <h1 className="form-title">
        Create Your <span>Recipe</span>
      </h1>
      <StyledForm>
        <input
          type="text"
          required="true"
          autoCapitalize="words"
          className="text-input"
          placeholder="Title*"
          autoComplete="off"
          name="title"
          value={title}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="title">Give your recipe a title</label>

        <textarea
          id=""
          cols="50"
          rows="5"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => onChange(e)}
        ></textarea>
        <label htmlFor="description">Max 500 characters</label>

        <div className="yield-prep-cook">
          <div className="yield">
            <input
              type="text"
              className="text-input yield-input"
              placeholder="Yield"
            />
            <label htmlFor="yield">How many does this recipe serve</label>
          </div>
          <div className="time">
            <input
              type="text"
              className="text-input"
              placeholder="Prep time"
              name="preptime"
              value={preptime}
              onChange={(e) => onChange(e)}
            />
            <p>min</p>
          </div>

          <div className="time">
            <input
              type="text"
              className="text-input"
              placeholder="Cook time"
              name="cooktime"
              value={cooktime}
              onChange={(e) => onChange(e)}
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

        {/* Conditional Render Ingredient Entry */}
        {ingredient.map((item, idx) => (
          <div className="ingredient" id={idx}>
            <input
              type="text"
              className="text-input amount"
              placeholder="Amt*"
              name="ingredients"
              onChange={(e) => onChange(e)}
            />
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
            <i
              onClick={(e) => removeIngredient(e)}
              className="fas fa-times"
            ></i>
          </div>
        ))}

        <div className="add-ingredient" onClick={(e) => addIngredient(e)}>
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
          <i className="fas fa-times blank"></i>
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
          <i className="fas fa-times"></i>
        </div>

        {procedure.map((item, idx) => (
          <div className="procedure">
            <h3 className="step">{`Step ${idx + 3}.`}</h3>
            <textarea
              name="procedure"
              className="procedure-text"
              cols="50"
              rows="2"
              placeholder="Add a procedure*"
            ></textarea>
            <i className="fas fa-times"></i>
          </div>
        ))}

        <div className="add-ingredient" onClick={(e) => addProcedure(e)}>
          <img src={addNew} className="add-item" alt="" />
          <p>Add another step</p>
        </div>

        <h2 className="tags-header">Add Tags</h2>
        <div className="container">
          <div className="tag-container">
            {tag.map((item, idx) => (
              <div className="tag">
                <span className="tag-text">{item}</span>
                <i
                  onClick={(e) => removeTag([e])}
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
    align-items: center;

    .amount {
      width: 10vh;
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

    .fa-times {
      font-size: 1.5rem;
      margin-left: 1rem;
      cursor: pointer;
    }
  }

  .add-ingredient {
    display: flex;
    align-self: center;
    justify-content: center;
    margin: 1rem;
    cursor: pointer;

    p {
      margin-left: 0.8rem;
      color: #969696;
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

    i {
      font-size: 1.5rem;
      cursor: pointer;
    }

    .blank {
      opacity: 0;
      pointer-events: none;
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
