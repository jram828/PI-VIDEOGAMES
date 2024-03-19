import SearchBar from "../searchbar";
import { Link } from "react-router-dom";
import { Button } from "../Mystyles";

const Nav = ({onSearch}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        width: "90%",
      }}
    >
      <SearchBar onSearch={onSearch} />
      <Link to="about/">
        <Button>About</Button>
      </Link>
      <Link to="home/">
        <Button>Home</Button>
      </Link>
      {/* <Link to="favorites/">
        <Button>Favorites</Button>
      </Link> */}
      <Link to={"/home"}>
        <Button>Logout</Button>
      </Link>
    </div>
  );
};

export default Nav;
