// Stateless functional components

// We only have a single method here - render()
// there is no event handlers, helper functions
// there is no state, we are getting all the data via props
// In situation like this we can convert this component into a
// Stateless Functional Component
// instead of using a class to define this component we can use a function

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href>
        Vidly
        <span className="badge badge-pill badge-secondary ml-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

// we cannot use this.props as it only works in class components
// so we need to pass it as an argument
// React will pass the props object as an argument to this function at runtime

export default NavBar;
