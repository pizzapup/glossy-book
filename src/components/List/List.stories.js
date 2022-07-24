import { List } from "./List";
import "./List.css";

export default {
  title: "Design System/List",
  component: List,
};
const Template = (args) => <List {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  className: "List",
};
