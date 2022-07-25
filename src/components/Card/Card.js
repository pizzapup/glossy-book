import "./Card.css";

export const Card = (props) => {
  const Image = (data) => (
    <img
      src={data.src}
      height={data.height}
      width={data.width}
      alt={data.alt}
      className="card-image"
    />
  );
  return (
    <>
      <article className="card">
        {/** block, default , reorder extracta*/}
        <div className="card-text-wrapper">
          <h2 className="card-heading">
            <a {...props.link} className="card-cta-primary">
              {props.heading}
            </a>
          </h2>
          <p className="card-text">{props.body}</p>
          <small className="card-small">{props.smallText}</small>
        </div>
        <div className="card-media-wrapper">
          <Image {...props.media} />
        </div>
      </article>
    </>
  );
};
export const CardGroup = ({ children }) => {
  return (
    <div className="card-group">
      <ul className="card-group-list">{children}</ul>
    </div>
  );
};

export const CardGroupItem = (props) => {
  return (
    <li className="card-group-item">
      <Card {...props} />
    </li>
  );
};
