import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const getRecipe = async (id) => {
    const check = localStorage.getItem(id);
    if (check) {
      setRecipe(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const recipe = await data.json();
      localStorage.setItem(id, JSON.stringify(recipe));
      setRecipe(recipe);
    }
  };

  useEffect(() => {
    getRecipe(params.id);
    console.log(params.id);
  }, [params.id]);

  return (
    <Wrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>

      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : " "}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : " "}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients?.map((item, index) => {
              return <li key={index}>{item.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5rem auto 5rem auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10vw;

  padding: 0 1.4rem;

  .active {
    background: linear-gradient(90deg, #ff008c 0%, #493240 100%);
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5;
  }

  ul {
    margin-top: 2rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.3rem;
    // flex: 1;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #494949 0%, #313131 100%);
  color: #fff;
  border: none;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Info = styled.div`
  // margin: 4rem;
  flex: 1;
`;

export default Recipe;

// <p>{recipe.summary}</p>
// <p>{recipe.instructions}</p>
// <p>{recipe.readyInMinutes}</p>
// <p>{recipe.servings}</p>
// <p>{recipe.sourceUrl}</p>
// <p>{recipe.sourceName}</p>
// <p>{recipe.spoonacularScore}</p>
// <p>{recipe.healthScore}</p>
// <p>{recipe.pricePerServing}</p>
// <p>{recipe.cheap}</p>
// <p>{recipe.veryHealthy}</p>
// <p>{recipe.veryPopular}</p>
// <p>{recipe.sustainable}</p>
// <p>{recipe.dairyFree}</p>
// <p>{recipe.glutenFree}</p>
