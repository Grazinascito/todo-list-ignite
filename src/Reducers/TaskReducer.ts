import { InputProps } from "../components/Input/Input";

export default function tasksReducer(tasks: InputProps[], action: any) {
  console.log(tasks, "tasts")
  switch (action.type) {
    case "added": {
      return [...tasks, { name: action.name, id: action.id, isChecked: action.boolean }];
    }
    case "check": {
      return tasks.map((task: any) => {
        if (task.id === action.id) {
          return { ...task, isChecked: !task.isChecked };
        } else {
          return task;
        }
      });
    }
    case "delete": {
      return tasks.filter((task: any) => {
        if (task.id !== action.id) {
          return task;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
