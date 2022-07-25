import React from "react";
import { Card, CardGroup, CardGroupItem } from "./Card";

export default {
  title: "Card",
  component: Card,
  id: "card",
  argTypes: {
    heading: { type: { summary: "Card Title" } },
    body: { type: { summary: "Card body text" } },
  },
  args: {
    link: { href: "#", rel: "nofollow" },
    heading: "Card Component",
    media: {
      src: "https://placedog.net/300/400",
      alt: "placedog puppy",
      height: "300px",
      width: "400px",
    },

    body: "Add more card body text... probably about puppies. Commodo ut laborum fugiat aliqua eiusmod voluptate pariatur",
    smallText: (
      <>
        By <a href="#anotherCTA">secondary CTA</a>
      </>
    ),
  },

  parameters: {
    // componentSubtitle: "primary button style for application",
    docs: {
      description: { component: `card component` },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
export const TitleOnly = Template.bind({});
export const WholeCard = Template.bind({});
export const PseudoContentTrick = Template.bind({});
export const Card_Group = (args) => (
  <CardGroup>
    <CardGroupItem {...args} />
    <CardGroupItem {...args} />
    <CardGroupItem {...args} />
  </CardGroup>
);
