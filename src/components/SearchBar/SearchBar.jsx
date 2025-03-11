import { Search } from "react-bootstrap-icons";
import s from "./style.module.css";
export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.tim !== "") {
      onSubmit(e.target.value);
    }
  }
  return (
    <>
      <Search className={s.icon} size={27} />
      <input
        onKeyUp={submit}
        type="text"
        className={s.input}
        placeholder="Chercher un TV show que tu pourrais aimer"
      />
    </>
  );
}
