import { Todo, TodoId } from "@/types/todo.type";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";

const TodoItem = ({
  item,
  handleUpdate,
}: {
  item: Todo;
  handleUpdate: (id: TodoId) => void;
}) => {
  const { id, label, status } = item;
  return (
    <TableRow>
      <TableCell>{label}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell className="flex justify-end">
        <Button
          onClick={() => handleUpdate(id)}
          style={{
            cursor: "pointer",
          }}
        >
          Modifier
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
