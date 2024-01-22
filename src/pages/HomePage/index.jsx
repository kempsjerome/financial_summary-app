import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import style from "./style.module.scss";

export const HomePage = ({ listElement, addElement, removeElement }) => {
  return (
    <div className={style.container}>
      <Header />
      <main>
        <Form listElement={listElement} addElement={addElement} removeElement={removeElement} />
        <List listElement={listElement} removeElement={removeElement} />
      </main>
    </div>
  );
};
