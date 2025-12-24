import type { MovieButtonProps } from "../../types/heroTypes";
import Button from "../../../../reusable/button/Button";

function HeroIntroductionButton({ item, movie }: MovieButtonProps) {
  const handleButtonClick = () => {
    if (item.type === "Play") console.log(movie);
    else if (item.type === "Add") console.log("Added");
  };

  const modifier = item.type === "Add" ? "transparent" : undefined;

  return (
    <Button
      buttonClass="hero"
      modifier={modifier}
      key={item.id}
      onClick={handleButtonClick}
    >
      <img
        src={item.icon}
        className="hero__button-image"
        alt="hero button icon"
      />
      {item.text}
    </Button>
  );
}

export default HeroIntroductionButton;