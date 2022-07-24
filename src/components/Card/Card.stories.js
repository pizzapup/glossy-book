import React from "react";
import { Card } from "./Card";

export default {
  title: "Design System/Card/Card",
  component: Card,
  id: "card",
  argTypes: {
    headingText: { type: { summary: "Card Title" } },
    bodyText: { type: { summary: "Card body text" } },
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "card"],
      },
      type: { summary: "card variants" },
    },
    callToAction: {
      control: {
        type: "select",
        options: ["button", "link (a or react-router)"],
      },
      type: {
        summary: "method of call-to-action",
        detail:
          "Call-to-action is the interactive piece of the card (clickable)",
      },
    },
    args: {
      media: {
        src: "https://placedog.net/380/680",
        height: "380px",
        width: "680px",
      },
    },
  },
  parameters: {
    // componentSubtitle: "primary button style for application",
    docs: {
      description: {
        component: `
<div className='sub-heading>A card is container for a few short, related pieces of information. There are no <card/> elements, ARIA design patterns, or corresponding accessibility standards for card components. 
</div> <br/>


- [Inclusive Components - Cards](https://inclusive-components.design/cards/) by Heydon Pickering
- [Block Links, Cards, Clickable Regions, Rows, Etc.](https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html#Additionals) by Adrian Roselli
- [Accessible Cards](https://kittygiraudel.com/2022/04/02/accessible-cards/) by Kitty Giraudel
- [Lightning Design System - Cards](https://www.lightningdesignsystem.com/components/cards/) from Salesforce 
- [A11Y Cards](https://a11y-style-guide.com/style-guide/section-cards.html#kssref-cards-basic) from A11Y
- ["Cards: UI-Component Definition"](https://www.nngroup.com/articles/cards-component/) by Page Laubheimer

## Basic Guidelines: 
- Contrast (minimum) - The visual presentation of text and images of text has a contrast ratio of at least **4.5:1** (some exceptions [WCAG](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#contrast-minimum))
- All elements that need to be highlighted have tabbing focus
- Non-text Content - All non-text content that is presented to the user has a text alternative that serves the equivalent purpose If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it does not need text alternatives, guidelines for [images of text](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#images-of-text)
- tip: You can add \`class="visuallyhidden"\` with descriptive text to give more context to a button or link's purpose.
- instead of setting \`outline:\` to \`none\`, set it to \`transparent\` instead


**Hover/Focus Styles**: <br/>
\`:focus\` only applies to the link itself. Use \`:focus-within\` along with \`:focus\`

          css:
          .card a:focus {
          /* basic focus styles */
             text-decoration: underline;
          }
          .card:focus-within {
          /* ignored if :focus-within is _not_ supported */
              box-shadow: 000 0.25rem;
              outline: 2px solid transparent;
          }
          .card:focus-within a:focus {
          /* ignored if :focus-within is _not_ supported; removes unnecessary basic :focus style where  :focus-within is supported */
             text-decoration: none;
          }


### Performance 

Images are one of the biggest culprits for web page size so it's important we optimise them. Tools like TinyJPG (& PNG) make this very easy. In addition to using optimisation tools to reduce file size we can also make use of the loading="lazy" attribute. Using this means we give browsers a nudge to delay the loading of images until they're needed

### Why \`<article></article>\` ?<br/>
The \`<article>\` HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include:
<br/>
- forum post
- magazine or newspaper article
- blog entry
- a product card
- user-submitted comment 
- interactive widget or gadget
- ... any other independent item of content

          `,
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  className: "card title-only",
  link: { href: "#", rel: "nofollow" },
  title: "TitleOnly Card 380x680",
  media: {
    src: "https://placedog.net/380/680",
    height: "380px",
    width: "680px",
  },
  alt: "placedog puppy",
  bodytext:
    "the link in this card wraps around only the heading/title. Add more card body text... probably about puppies. Commodo ut laborum fugiat aliqua eiusmod voluptate pariatur.",
};
export const WholeCard = Template.bind({});
WholeCard.args = {
  className: "card whole-card-link",
  link: { href: "#", rel: "nofollow" },
  title: "Whole Card Link 380x680",
  img: { src: "https://placedog.net/380/680", height: "380px", width: "680px" },
  imgAlt: "placedog puppy",
  bodytext:
    "the link in this card wraps around the entire card. Add more card body text... probably about puppies. Commodo ut laborum fugiat aliqua eiusmod voluptate pariatur.",
};
export const TestHeading = (args) => (
  <div>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <Card {...args} />
  </div>
);
TestHeading.args = {
  headingLevel: 3,
};
export const PseudoContentTrick = Template.bind({});
PseudoContentTrick.args = {
  className: "card psuedo-content-trick",
  link: { href: "#", rel: "nofollow" },
  title: "Psuedo-content Trick 380x680",
  img: { src: "https://placedog.net/380/680", height: "380px", width: "680px" },
  imgAlt: "placedog puppy",
  bodytext:
    "the link in this card wraps around the entire card. Add more card body text... probably about puppies. Commodo ut laborum fugiat aliqua eiusmod voluptate pariatur.",
};
PseudoContentTrick.parameters = {
  docs: {
    description: {
      story: `Click anywhere aka entire card is clickable. Can be helpful if the placement of a clickable element would not be obvious to users. (Without JavaScript)
      
the pseudo-content method stretches the link's layout over the whole card, making the entire card clickable, without the need to alter established markup. The link acts as a mask over the top of the card. 
<br/>
**pros**: doesn't rely on JavaScript, can be helpful if the placement of a clickable element would not be obvious to users, makes link easier to target by touch and mouse, link's context menu appears wherever the use right clicks on the card <br/> **cons**: difficult to select text ('raising' elements to fix this would cause a gap/hole in the clickable area), all card contents will form the label of the link (can become verbose. some screen readers only read out the first element of a 'block link', making it easy to miss the additional functionality)
1. give the card container element \`position: relative\`
2. give the link's \`::after\` pseudo-content \`position: absolute\`
3. give each of the link's \`::after\` pseudo-content \`left, top, right, \`and\` bottom\` properties a value of \`0\`


`,
    },
  },
};
export const RedundantClickEvent = Template.bind({});
RedundantClickEvent.args = {
  className: "card redundant-click-event",
  link: { href: "#", rel: "nofollow" },
  title: "Psuedo-content Trick 380x680",
  img: { src: "https://placedog.net/380/680", height: "380px", width: "680px" },
  imgAlt: "placedog puppy",
  bodytext:
    "the link in this card wraps around the entire card. Add more card body text... probably about puppies. Commodo ut laborum fugiat aliqua eiusmod voluptate pariatur.",
};
RedundantClickEvent.parameters = {
  docs: {
    description: {
      story: `[The Redundant Click Event](https://inclusive-components.design/cards/) - Heydon Pickering
      
the "redundant-click-event" method places a JavaScript click handler on the card's container to trigger the click method on the link inside it. This approach prevents selecting the text. 

> "It's not highly probable the user would choose to select text from a card/teaser when they have access to the full content to which the card/teaser is pointing. But it may be disconcerting to them to find they cannot select the text" - Heydon Pickering


<br/>


`,
    },
  },
};
