import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
  const [itemSelected, setItemSelected] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={itemSelected === index ? "list-group-item active":"list-group-item"}
            key={item}
            onClick={()=> {setItemSelected(index);
            console.log(itemSelected);
            onSelectItem(item);
            }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
