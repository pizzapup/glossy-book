import React from "react";

/**
 * Heading.
 * Renders an `h1`-`h4` element, depending on the `level` prop.
 */
const Heading = (props) => {
  const { level, ...otherProps } = props;

  const H = (() => {
    switch (level) {
      case 1:
        return ({ children, ...headingProps }) => (
          <h1 {...headingProps}>{children}</h1>
        );
      case 2:
        return ({ children, ...headingProps }) => (
          <h2 {...headingProps}>{children}</h2>
        );
      case 3:
        return ({ children, ...headingProps }) => (
          <h3 {...headingProps}>{children}</h3>
        );
      case 4:
        return ({ children, ...headingProps }) => (
          <h4 {...headingProps}>{children}</h4>
        );
      default:
        return ({ children, ...headingProps }) => (
          <h1 {...headingProps}>{children}</h1>
        );
    }
  })();

  return <H {...otherProps}>{props.children}</H>;
};

export default Heading;

//  credits to https://prismic.io/blog/accessible-components-in-a-cms#:~:text=Quotations-,Headings,-Headings%20provide%20some

// USAGE
// import Heading from "./Heading"; // the component we just wrote

// const Card = (props) => {
//   //Editors could set the heading level in the CMS or it will default to 2
//   const { title, picture, headingLevel = 2 } = props;

//   return (
//     <div>
//       {/* Now we have a dynamic heading level for our card */}
//       <Heading level={headingLevel}>{title}</Heading>
//       <img src={picture} />
//     </div>
//   );
// };
