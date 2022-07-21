import Filter from "../Filter/Filter";
import NavigationStyle from "./NavigationStyle";

const Navigation = () => {
  return (
    <NavigationStyle>
      <ul className="element-left">
        <li>iStock</li>
        <Filter />
      </ul>

      <ul className="element-right">
        <li>Contact us</li>
        <li>+0800 9000 888</li>
      </ul>
    </NavigationStyle>
  );
};
export default Navigation;
