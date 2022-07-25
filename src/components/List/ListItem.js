export const ListItem = ({children, compType}) => {
    return <li className={"list-item list-item-" + compType}>{children}</li>;
};
