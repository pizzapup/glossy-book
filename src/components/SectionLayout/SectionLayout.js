import { TextBlock } from "../Text/TextBlock";
import { ImageDuo } from "../ImageDuo/ImageDuo";
import "./SectionLayout.css";
import { Button } from "../Button/Button";

export const SectionLayout = (props) => {
  const data = {
    variant: "primary",
    variantType: "section",
    alignment: "center",
    headingText: "Section TextBlock",
    bodyText: "body content of primary textblock component",
    buttonText: "Section Button",
    images: [
      "https://place-puppy.com/400x600",
      "https://place-puppy.com/400x600",
    ],
    deviceView: "vertical",
    reverse: true,
  };
  return (
    <>
      <div className="section-layout">
        <div className="section-layout-inner">
          <div className="text-section">
            <h2 className="heading-text">{data.headingText}</h2>
            <p className="body-text">{data.bodyText}</p>
            <Button>{data.buttonText}</Button>
            {/* <TextBlock {...data} /> */}
          </div>
          <div className="media-section">
            <ImageDuo images={data.images} />
          </div>
        </div>
      </div>
    </>
  );
};
// <>
//   <div className={ClassNames}>
//     <TextBlock {...props} />
//     <ImageDuo images={props.images} />
//   </div>
// </>;
