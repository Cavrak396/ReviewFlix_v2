import type { LanguagesItemType } from "../../types/headerTypes";

function HeaderUserOption({ item }: LanguagesItemType) {
  return (
    <option value={item.value} className="header__user-language-option">
      {item.text}
    </option>
  );
}

export default HeaderUserOption;
