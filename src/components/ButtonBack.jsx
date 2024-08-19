import { Link } from "react-router-dom";

const ButtonBack = () => {
  return (
    <>
      <div className="fixed bottom-2 left-2 lg:bottom-8 lg:left-8 z-20">
        <Link to={"/"}>
          <box-icon
            type="solid"
            name="left-arrow-circle"
            color={"#E64A19"}
            animation="tada-hover"
            size={"6rem"}
          ></box-icon>
        </Link>
      </div>
    </>
  );
};
export default ButtonBack;
