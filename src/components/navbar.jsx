// Destructuring arguments

// Instead of repeating 'props.' or 'this.props.' everywhere we can use object destructuring to
// get the desired property from the props object
// this will make the code cleaner

// React passes the props object to this SFC at runtime
// we can use object destructuring to get the property totalConters from props
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href>
        Vidly
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
