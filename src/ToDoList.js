import ListGroup from "react-bootstrap/ListGroup";

export default function ToDoList({ list }) {
  return (
    <ListGroup>
      {list.length ? (
        list.map((todo) => <ListGroup.Item key={todo}>{todo}</ListGroup.Item>)
      ) : (
        <p>"the list is empty" </p>
      )}
    </ListGroup>
  );
}
