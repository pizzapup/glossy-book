import "./Card.css";
import Heading from "../Heading/Heading";

export const Card = (props) => {
  const { headingLevel = 2, ...rest } = props;
  return (
    <>
      <article className="card">
        <div className="card-text">
          <Heading level={headingLevel} className="card-heading">
            <a
              href="/card-design-woes"
              className="card-link card-cta card-cta-primary"
            >
              A great product
            </a>
          </Heading>
          <p className="card-text">Description of the great product</p>
          <small className="card-small-text">By Great Products(TM)</small>
        </div>
        <div className="card-media">
          <img {...rest.img} alt="" className="card-image" />
        </div>
      </article>
    </>
  );
};

export const CardGroup = (props) => {
  const list = ["a", "b", "c", "d"];
  return (
    <ul className="card-group">
      {list.map((card, index) => (
        <li className="card-group-item">
          <Card />
        </li>
      ))}
    </ul>
  );
};
