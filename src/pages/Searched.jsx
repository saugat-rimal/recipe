import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Searched = () => {
  const [search, setSearch] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const check = localStorage.getItem(name);
    if (check) {
      setSearch(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&query=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem(name, JSON.stringify(recipes.results));
      setSearch(recipes.results);
    }
  };

  useEffect(() => {
    getSearched(params.search);
    // console.log(params.search);
  }, [params.search]);

  return (
    <Grid>
      {search.map((recipe) => {
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
  );
};

const Grid = styled.div`
  width: 100%;
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

export default Searched;
