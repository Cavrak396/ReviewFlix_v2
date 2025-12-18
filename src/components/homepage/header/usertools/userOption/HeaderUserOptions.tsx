import { languagesValues } from "../../utils/headerUtils";
import HeaderUserOption from "./HeaderUserOption";

function HeaderUserOptions() {
  return (
    <select
      id="user-language-select"
      name="language"
      className="header__user-language-options"
      defaultValue="en"
    >
      {languagesValues.map((item) => (
        <HeaderUserOption item={item} key={item.id} />
      ))}
    </select>
  );
}

export default HeaderUserOptions;
