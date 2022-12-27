import { Category, Search } from "./components";
import Pages from "./pages/Pages";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Nav>
        <Logo to="/">
          <GiKnifeFork />
          Kichen
        </Logo>
      </Nav>

      <Search />
      <Category />
      <Pages />
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Lobster Two", cursive;
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  padding: 3rem 4rem;
`;

const Nav = styled.nav`
  display: flex;
  padding: 4rem 0rem;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
