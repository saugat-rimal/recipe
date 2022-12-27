import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiDumpling } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <List>
        <NavLink to={"/cuisine/Indian"}>
          <GiDumpling fontSize={28} />
          <h3>Indian</h3>
        </NavLink>

        <NavLink to={"/cuisine/Italian"}>
          <FaPizzaSlice fontSize={28} />
          <h3>Italian</h3>
        </NavLink>

        <NavLink to={"/cuisine/American"}>
          <FaHamburger fontSize={28} />
          <h3>American</h3>
        </NavLink>

        <NavLink to={"/cuisine/Thai"}>
          <GiNoodles fontSize={28} />
          <h3>Thai</h3>
        </NavLink>

        <NavLink to={"/cuisine/Japanese"}>
          <GiChopsticks fontSize={28} />
          <h3>Japanese</h3>
        </NavLink>
      </List>
    </div>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 2rem auto;
  gap: 2rem;
  transition: all 3s ease-in-out;

  a {
    text-decoration: none;
    background: linear-gradient(90deg, #494949 0%, #313131 100%);
    padding: 1rem;
    height: 100px;
    width: 100px;
    display: flex;
    gap: 0.2rem;
    items-align: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    transition: all 3s ease-in-out;
  }

  svg {
    text-align: center;
    width: 100%;
    color: #fff;
  }

  h3 {
    text-align: center;
    width: 100%;
    color: #fff;
  }

  a.active,
  a:hover {
    background: linear-gradient(90deg, #ff008c 0%, #493240 100%);
    transition: all 3s ease-in-out;
  }
`;

export default Category;
