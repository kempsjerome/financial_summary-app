// Header.jsx
import logo from "../../assets/logo.png";
import style from "./style.module.scss";

export const Header = () => {
  return (
    <div className={style.container}>
      <header>
        <img src={logo} alt="" />
        <h1 className={style.title1}>Dev kemps</h1>
      </header>
    </div>
  );
};
