import { InputProps } from "../components/Input/Input";

export default function tasksReducer(tasks: InputProps[], action: any) {
  switch (action.type) {
    case "added": {
      return [...tasks, { name: action.payload.name, id: action.payload.id, isChecked: action.payload.actionboolean }];
    }
    case "check": {
      return tasks.map((task: any) => {
        console.log(task)
        if (task.id === action.id) {
          console.log(action.task.isChecked)
          return { ...task, isChecked: !action.task.isChecked };
        } else {
          return task;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
