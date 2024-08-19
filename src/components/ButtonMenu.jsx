/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const ButtonMenu = ({ name }) => {
  return (
    <>
      <Link
        to={`/${name}`}
        className="hover:text-[#E64A19] hover:border-[#FFCCBC] transition ease-in-out cursor-pointer"
      >
        <box-icon
          type="solid"
          name="folder-open"
          size="lg"
          color="#FFCCBC"
        ></box-icon>
        {name}
      </Link>
    </>
  );
};
export default ButtonMenu;
