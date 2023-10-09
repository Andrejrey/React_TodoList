import FactCheckIcon from "@mui/icons-material/FactCheck";
import ReactSwitch from "react-switch";

export default function Header({ theme, toggleTheme }) {
  return (
    <header>
      <div>
        <h1>ToDo List</h1>
        <FactCheckIcon />
      </div>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </header>
  );
}
