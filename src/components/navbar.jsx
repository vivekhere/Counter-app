const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href=".">
        Vidly
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
