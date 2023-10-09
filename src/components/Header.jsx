import FactCheckIcon from "@mui/icons-material/FactCheck";
import ReactSwitch from "react-switch";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header({ theme, toggleTheme }) {
  return (
    <header>
      <div>
        <h1>ToDo List</h1>
        <FactCheckIcon />
      </div>
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}
        offColor={"#FFFFFF"}
        onColor={"#505050"}
        offHandleColor={"#05b1cf"}
        uncheckedIcon={<LightModeIcon id="sun" />}
        checkedIcon={<NightsStayIcon id="moon" />}
      />
    </header>
  );
}
