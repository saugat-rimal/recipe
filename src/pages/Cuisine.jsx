import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const check = localStorage.getItem(name);
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&cuisine=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem(name, JSON.stringify(recipes.results));
      setCuisine(recipes.results);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);

  return (
    <div>
      <Grid>
        {cuisine.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
`;

const Card = styled.div`
  text-align: center;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  }

  img:hover {
    transition: all 0.5s ease;
    background-color: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.9),
      rgba(0, 255, 0, 0.5),
      blue
    );
  }

  h4 {
    margin: 1rem 0;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 1.4rem;
  }
  a {
    text-decoration: none;
  }
`;

export default Cuisine;
