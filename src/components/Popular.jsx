import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      <h3>Popular Picks</h3>

      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4rem",
          breakpoints: {
            1200: { perPage: 3, gap: "3rem" },
            800: { perPage: 2, gap: "1rem" },
            640: { perPage: 1, gap: "0rem" },
          },
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide>
              <Card key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                {/* <p>{recipe.summary}</p> */}
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 10px;
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
    width: 100%;
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
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
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

export default Popular;
