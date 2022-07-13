import NavigationStyle from "./NavigationStyle";

const Navigation = () => {
  return (
    <NavigationStyle>
      <nav>
        <ul className="main-nav">
          <li>iStock</li>
          <li>Images</li>
        </ul>
      </nav>

      <nav>
        <ul className="main-nav">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
    </NavigationStyle>
  );
};
export default Navigation;
