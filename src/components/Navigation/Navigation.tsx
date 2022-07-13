import NavigationStyle from "./NavigationStyle";
import { FiMenu } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";

const Navigation = () => {
  return (
    <NavigationStyle>
      <div className="main-nav_left-side">
        <FiMenu size={30} />

        <div className="title">iStock</div>
      </div>

      <nav>
        <ul className="main-nav_right-side">
          <li>Prices</li>
          <li>Templates</li>
          <li>
            <BiUserCircle size={30} />
          </li>
        </ul>
      </nav>
    </NavigationStyle>
  );
};
export default Navigation;
