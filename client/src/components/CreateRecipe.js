import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainButton } from "../Styles";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addRecipe } from "../actions/recipes";

const CreateRecipe = ({ addRecipe, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    serves: "",
    preptime: "",
    cooktime: "",
    ingredients: "",
    procedures: [],
    tags: [],
  });

  const [ings, setIngs] = useState([]);

  const [steps, setSteps] = useState([]);

  const [tag, setTags] = useState([]);
  const createTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags([...tag, e.target.value]);
      e.target.value = "";
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      ingredients: ings,
      procedures: steps,
      tags: tag,
    });
    console.log(tag);
  }, [ings, steps, tag]);

  const { title, description, serves, preptime, cooktime } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const removeTag = (e) => {
    const index = tag.indexOf(e.target.parentElement.firstChild.innerText);
    setTags([...tag.slice(0, index), ...tag.slice(index + 1)]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData, history);
  };

  // Console.logs
  console.log(formData);
  return (
    <>
      <h1 className="form-title">
        Create Your <span>Recipe</span>
      </h1>
      <StyledForm onSubmit={(e) => onSubmit(e)}>
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
              name="serves"
              value={serves}
              onChange={(e) => onChange(e)}
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
            <label for="preptime">Time in mins</label>
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
            <label for="cooktime">Time in mins</label>
          </div>
        </div>

        <h2 className="ingredient-header">Add Ingredients</h2>

        <div>
          {ings.map((ing, idx) => {
            return (
              <div className="ingredient" key={ing.id}>
                <input
                  type="text"
                  placeholder="Amount"
                  className="text-input amount"
                  value={ing.amount}
                  onChange={(e) => {
                    const amount = e.target.value;
                    setIngs((currentIngredient) =>
                      produce(currentIngredient, (value) => {
                        value[idx].amount = amount;
                      })
                    );
                  }}
                />
                <select
                  placeholder="Unit"
                  className="text-input unit"
                  value={ing.unit}
                  onChange={(e) => {
                    const unit = e.target.value;
                    setFormData({
                      ...formData,
                      ingredients: ings,
                    });
                    setIngs((currentIngredient) =>
                      produce(currentIngredient, (value) => {
                        value[idx].unit = unit;
                      })
                    );
                  }}
                >
                  <option value="tbsp">Tbsp</option>
                  <option value="tsp">Tsp</option>
                  <option value="oz">Oz</option>
                  <option value="cup">Cup</option>
                </select>
                <input
                  type="text"
                  placeholder="Ingredient"
                  className="text-input ingredient-input"
                  value={ing.item}
                  onChange={(e) => {
                    const item = e.target.value;
                    setFormData({
                      ...formData,
                      ingredients: ings,
                    });
                    setIngs((currentIngredient) =>
                      produce(currentIngredient, (value) => {
                        value[idx].item = item;
                      })
                    );
                  }}
                />
                <input
                  type="text"
                  placeholder="Alt-Ingredient"
                  className="text-input alt-input"
                  value={ing.alternate}
                  onChange={(e) => {
                    const alternate = e.target.value;
                    setFormData({
                      ...formData,
                      ingredients: ings,
                    });
                    setIngs((currentIngredient) =>
                      produce(currentIngredient, (value) => {
                        value[idx].alternate = alternate;
                      })
                    );
                  }}
                />
                <i
                  className="fas fa-times"
                  onClick={() => {
                    setIngs((currentIngredient) =>
                      currentIngredient.filter((x) => x.id !== ing.id)
                    );
                  }}
                ></i>
              </div>
            );
          })}
        </div>

        <div
          className="add-ingredient"
          onClick={() =>
            setIngs((currentIngredient) => [
              ...currentIngredient,
              {
                id: uuidv4(),
                amount: "",
                unit: "",
                item: "",
                alternate: "",
              },
            ])
          }
        >
          <i
            className="fas fa-plus-square add-item"
            alt=""
            style={
              ings.length === 0 ? { color: "#3b7c0b" } : { color: "#969696" }
            }
          />
          <p
            style={
              ings.length === 0
                ? { color: "#3b7c0b", fontWeight: "600" }
                : { color: "#969696" }
            }
          >
            {ings.length === 0 ? "Add an ingredient" : "Add another ingredient"}
          </p>
        </div>

        <h2 className="add-procedure">Add Procedures</h2>

        {steps.map((step, idx) => {
          return (
            <div className="procedure">
              <h3 className="step">Step {idx + 1}.</h3>
              <textarea
                name="procedure"
                className="procedure-text"
                cols="50"
                rows="2"
                placeholder="Add a procedure*"
                value={step.step}
                onChange={(e) => {
                  const step = e.target.value;
                  setFormData({
                    ...formData,
                    procedures: steps,
                  });
                  setSteps((currentStep) =>
                    produce(currentStep, (value) => {
                      value[idx].step = step;
                    })
                  );
                }}
              ></textarea>
              <i
                className="fas fa-times"
                onClick={() => {
                  setSteps((currentStep) =>
                    currentStep.filter((x) => x.id !== step.id)
                  );
                }}
              ></i>
            </div>
          );
        })}

        <div
          className="add-ingredient"
          onClick={() =>
            setSteps((currentStep) => [
              ...currentStep,
              {
                id: uuidv4(),
                step: "",
              },
            ])
          }
        >
          <i
            className="fas fa-plus-square add-item"
            alt=""
            style={
              steps.length === 0 ? { color: "#3b7c0b" } : { color: "#969696" }
            }
          />
          <p
            style={
              steps.length === 0
                ? { color: "#3b7c0b", fontWeight: "600" }
                : { color: "#969696" }
            }
          >
            {steps.length === 0 ? "Add a step" : "Add another step"}
          </p>
        </div>

        <h2 className="tags-header">Add Tags</h2>
        <div className="container">
          <div className="tag-container">
            {tag.map((item, idx) => (
              <div className="tag">
                <span className="tag-text">{item}</span>
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
              placeholder="Type tag and press 'Enter'"
              onKeyPress={(e) => createTag(e)}
            />
          </div>
        </div>

        <MainButton type="submit">Submit</MainButton>
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

  .time {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      flex: 1;
      width: 90%;
    }
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
    align-items: center;
    margin: 1rem;
    cursor: pointer;

    .fa-plus-square {
      font-size: 2rem;
    }

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
export default connect(null, { addRecipe })(CreateRecipe);
