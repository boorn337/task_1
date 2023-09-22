import Button from "../../common/Button/Button";
import Logo from "../Header/components/Logo/Logo";
import "./Header.css";
export const Header = (props) => {
  const onLogoClick = props;
  return (
    <header>
      <div className="imgCourses">
        <Logo onLogoClick={onLogoClick} />
        <p>Courses</p>
      </div>
      <div className="log-in">
        <p className="nickName">Oleksandr</p>
        <Button text="Logout" />
      </div>
    </header>
  );
};
