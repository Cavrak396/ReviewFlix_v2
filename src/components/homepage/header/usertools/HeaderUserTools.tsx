import HeaderSignButton from "./signButton/HeaderSignButton";
import HeaderUserOptions from "./userOption/HeaderUserOptions";

function HeaderUserTools() {
  return (
    <div className="header__usertools">
      <HeaderUserOptions />
      <HeaderSignButton />
    </div>
  );
}

export default HeaderUserTools;
