import { useState } from "react";
import  "../stlyes/ListGroup.css"
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
interface ListItemProps {
  active: boolean
}
const ListItem = styled.li<ListItemProps>`
  padding: 0;
  background: ${props => props.active ? "blue" : "none"}
`;
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
  const [itemSelected, setItemSelected] = useState(0)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === itemSelected}
            key={item}
            onClick={()=> {setItemSelected(index);
            console.log(itemSelected);
            onSelectItem(item);
            }
            }
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
