import { FunButtons } from "./FunButtons";
import "./BtnGallery.css";
import { MarqueeButton } from "./Marquee";
export const variants = [
  "bestia",
  "hyperion",
  "pan",
  "hyperion",
  "mimas",
  "pandora",
  "kari",
  "atlas",
  "janus",
  "anthe",
  "pallene",
  "telesto",
  "calypso",
  "skoll",
  "greip",
  "dione",
  "helene",
  // "rhea",
  // "narvi",
  // "hati",
];
export function BtnGallery(props) {
  const items = variants.map((item, index) => (
    <li className="button-gallery-list-item" key={index}>
      {item === "kari" || item === "atlas" ? (
        <MarqueeButton variant={item} label={props.label} />
      ) : (
        <FunButtons
          variant={item}
          label={props.label}
          onClick={() => console.log({ item })}
        />
      )}
    </li>
  ));
  return <ul className="button-gallery-list">{items}</ul>;
}
