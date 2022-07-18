import { Button } from "../Button/Button";
import { TextBlock } from "../Text/TextBlock";
import "./Card.css";

const data = {
  headingText: "Product Title Text",
  bodyText: "product description text",
  buttonText: ["Action button", "$10", "$16"],
};
export const Card = () => {
  console.log("hello puppy!");
  return (
    <>
      <div className="card-wrap">
        <div className="card-top">
          <div className="sticker">sticker!</div>
          <img src="https://source.unsplash.com/random/?pink" alt="" />
          {/* <img src="https://place-puppy.com/250x370" alt="" /> */}
          {/* <div className="card-quickview-wrap"> */}
          <button className="card-quickview">Quick View</button>
          {/* </div> */}
        </div>
        <div className="card-bottom">
          <TextBlock variant="card" {...data} />
          <Optioncomp />
          <Button variant="outline">
            <div className="card-button-text">{data.buttonText[0]}</div>
            <div className="card-button-text-price">
              {data.buttonText[1]}
              <span className="card-button-text-discount">
                {data.buttonText[2]}
              </span>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};
export const Optioncomp = () => {
  return (
    <div className="options-wrap">
      <div className="option"></div>
      <div className="option"></div>
      <div className="option"></div>
      <div className="option svg-opt">
        <svg
          aria-hidden="false"
          width="15px"
          height="14px"
          viewBox="0 0 30 30"
          transform="rotate(0)"
          className="Icon-sc-1ny8wc9-0 bzaLUI"
        >
          <path d="M13.245 9.862L2.97 20.138l1.989 1.988 10.276-10.275 9.806 9.807 1.989-1.989L15.235 7.874z"></path>
        </svg>
      </div>
    </div>
  );
};
