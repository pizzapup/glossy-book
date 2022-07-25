import { List } from "./List";
import "./List.css";
import { ListItem } from "./ListITem";

export default {
  title: "List",
  component: List,
  id: "list",
  argTypes: {
    name: { type: { summary: "Name of List" } },
    children: <ListItem listType="standard">list item</ListItem>,
  },
  args: {
    name: "List",
  },
};

const Template = (args) => <List {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  className: "List",
};
