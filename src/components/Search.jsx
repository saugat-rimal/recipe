import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();

    navigate("/search/" + search);
  };

  //   console.log(search);

  return (
    <FormStyle onSubmit={submitSearch}>
      <FaSearch />
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        value={search}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: relative;
  width: 100%;
  max-width: 500px;

  justify-content: center;
  text-align: center;

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    width: 100%;
    font-size: 1.2rem;
    outline: none;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(90deg, #494949 0%, #313131 100%);
    color: #fff;
    margin: 0 auto 1rem auto;
    font-weight: 400;

    &:focus {
      border: 1px solid #494949;
      outline: none;
    }
  }

  svg {
    position: absolute;
    top: 40%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
    cursor: pointer;
  }
`;

export default Search;
