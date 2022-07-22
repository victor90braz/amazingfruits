import { BiSearchAlt2 } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import HeaderStyle from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container-left">
        <a href="/">
          <div className="logo">
            <picture>
              <source
                srcSet="/images/urban-flats-logo.png"
                media="(min-width:481px)"
                width={150}
              />
              <source
                srcSet="/images/urban-flats-logo.png"
                media="(min-width:700px)"
                width={400}
              />
              <img
                src="/images/urban-flats-mini-logo.jpg"
                alt="Urban Flats logo"
                width={50}
              />
            </picture>
          </div>
        </a>

        <div className="search">
          <BiSearchAlt2 size={20} className="search_icon" />
          <input
            type="text"
            placeholder="¿Dónde quieres vivir?"
            className="search_input"
          />
        </div>
      </div>

      <div className="container-right">
        <BsTelephone size={20} />

        <div className="telephone">
          <span>Contáctanos</span>
          <span className="telephone_number">+34 611 657 115</span>
        </div>

        <div className="icon-search">
          <BiSearchAlt2 size={20} className="icon-search" />
        </div>

        <div className="perfil">
          <button className="box-button">
            <BiUserCircle size={30} className="icon-user" />
            <span>Mi cuenta</span>
          </button>
        </div>
      </div>
    </HeaderStyle>
  );
};
export default Header;
