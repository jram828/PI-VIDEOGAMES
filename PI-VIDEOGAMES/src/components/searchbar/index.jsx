import { Button2, ContainerNav, Input } from "../Mystyles";
import { useState } from "react";

const SearchBar = (props) => {
  const [name, setName] = useState("");
  const handleClick = () => {
    props.onSearch(name);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <ContainerNav>
      <></>
      <Input
        value={name}
        onChange={handleChange}
        type="search"
        name="personaje"
        placeholder="ID..."
      />
      <Button2 onClick={handleClick}>Agregar</Button2>
      <></>
    </ContainerNav>
  );
};

export default SearchBar;
