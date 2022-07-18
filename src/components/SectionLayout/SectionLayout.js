import { TextBlock } from "../Text/TextBlock";
import { ImageDuo } from "../ImageDuo/ImageDuo";
import "./SectionLayout.css";

export const SectionLayout = (props) => {
  const device = "section-layout section-layout-" + props.deviceView;
  const ClassNames = props.reverse ? device + "-reverse" : device;

  console.log("CLASSNAMES: " + ClassNames);
  return (
    <>
      <div className={ClassNames}>
        <TextBlock {...props} />
        <ImageDuo images={props.images} />
      </div>
    </>
  );
};
