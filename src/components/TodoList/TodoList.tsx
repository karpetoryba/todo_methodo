import { Todo } from "@/types/todo.type";
import { Table, TableBody } from "../ui/table";
import TodoListHeader from "./TodoListHeader";
import { FIELDS } from "./utils";
import TodoItem from "../TodoItem";
import { useEffect, useState } from "react";
import Form from "../Form";
import { Button } from "../ui/button";

const TodoList = ({ list }: { list: Todo[] }) => {
  const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const handleUpdate = (id: string) => {
    const currentTodo = list.find((todo) => todo.id === id);
    if (!currentTodo) return;
    setSelectedTodo(currentTodo);
    setOpen(true);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const handleDelete = () => {};

  useEffect(() => {
    if (!open) {
      setSelectedTodo(undefined);
    }
  }, [open]);

  return (
    <div className="w-full flex flex-col gap-4 items-end">
      <Form
        data-testid="form"
        open={open}
        setOpen={setOpen}
        todo={selectedTodo}
      />
      <Button data-testid="submit-button" onClick={handleAdd}>
        Ajouter
      </Button>
      <Button data-testid="submit-button" onClick={handleDelete}>
        Suprimer
      </Button>
      <Table width={"100%"}>
        <TodoListHeader fields={FIELDS} />
        <TableBody>
          {list.map((item) => (
            <TodoItem item={item} handleUpdate={handleUpdate} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TodoList;
