import { Card } from "../Card/Card";
import "./Gallery.css";
import { theme } from "../../theme/theme";
import "../../theme/theme.css";
export const Gallery = () => {
  console.log("hello puppy gallery!");
  console.log(theme.colors.card);
  return (
    <>
      <div className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
