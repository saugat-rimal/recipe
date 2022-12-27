import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
          breakpoints: {
            1200: { perPage: 2, gap: "2rem" },
            800: { perPage: 1, gap: "2rem" },
          },
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 2rem;

  h3 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
    cursor: pointer;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: -10%;
    width: 100%;
    transform: translateY(-50%, 0%);
    color: white;
    font-weight: 500;
    font-size: 1.4rem;
    height: 48%;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    drop-shadow: 0 0 0.5rem black;
    text-align: center;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export default Veggie;
