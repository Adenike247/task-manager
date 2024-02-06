import Dashboard from "./assets/svg/Dashboard";
import Edit from "./assets/svg/Edit";
import Delete from "./assets/svg/Delete";
import Pending from "./assets/svg/Pending";
import Folder from "./assets/svg/Folder";
import Task from "./assets/svg/Task";
import Team from "./assets/svg/Team";
import Done from "./assets/svg/Done";
import WhiteDone from "./assets/svg/WhiteDone";
import DueDate from "./assets/svg/RaiseDate";
import DateRaised from "./assets/svg/DueDate";
import RaiseDate from "./assets/svg/RaiseDate";
export const taskContent = [
  {
    id: 1,
    mebemberName: "Alice B",
    decription:
      "lorem ipsum dolor sit amet, consecte adipiscing elit. Sed tincidunt elit sed tortor iaculis, sed feugiat est efficitur. ",
    dateRaisedIcon: <RaiseDate />,
    dateRaisedText: "5/12/2023",
    dueDateIcon: <DueDate />,
    dueDateText: "2/1/2024",
  },
  {
    id: 2,
    mebemberName: "Benjamin C",
    decription:
      "lorem ipsum dolor sit amet, consecte adipiscing elit. Sed tincidunt elit sed tortor iaculis, sed feugiat est efficitur. ",
    dateRaisedIcon: <RaiseDate />,
    dateRaisedText: "5/12/2023",
    dueDateIcon: <DueDate />,
    dueDateText: "2/1/2024",
  },
  {
    id: 3,
    mebemberName: "Carter B",
    decription:
      "lorem ipsum dolor sit amet, consecte adipiscing elit. Sed tincidunt elit sed tortor iaculis, sed feugiat est efficitur. ",
    dateRaisedIcon: <RaiseDate />,
    dateRaisedText: "5/12/2023",
    dueDateIcon: <DueDate />,
    dueDateText: "2/1/2024",
  },
  {
    id: 4,
    mebemberName: "Davis E",
    decription:
      "lorem ipsum dolor sit amet, consecte adipiscing elit. Sed tincidunt elit sed tortor iaculis, sed feugiat est efficitur. ",
    dateRaisedIcon: <RaiseDate />,
    dateRaisedText: "5/12/2023",
    dueDateIcon: <DueDate />,
    dueDateText: "2/1/2024",
  },
  {
    id: 5,
    mebemberName: "Edward F",
    decription:
      "lorem ipsum dolor sit amet, consecte adipiscing elit. Sed tincidunt elit sed tortor iaculis, sed feugiat est efficitur. ",
    dateRaisedIcon: <RaiseDate />,
    dateRaisedText: "5/12/2023",
    dueDateIcon: <DueDate />,
    dueDateText: "2/1/2024",
  },
];
export const navItemContent = [
  {
    id: 1,
    sideIcon: <Dashboard />,
    itemName: "Dashboard",
  },
  {
    id: 2,
    sideIcon: <Folder />,
    itemName: "Project",
  },
  {
    id: 3,
    sideIcon: <Task />,
    itemName: "Task",
  },
  {
    id: 4,
    sideIcon: <Team />,
    itemName: "Team",
  },
];
export const todoAction = [
  {
    id: 1,
    sideIcon: <Edit />,
    itemName: "Edit",
  },
  {
    id: 2,
    sideIcon: <Delete />,
    itemName: "Delete",
  },
  {
    id: 3,
    sideIcon: <Pending />,
    itemName: "Move to Pending",
  },
];
export const pendingAction = [
  {
    id: 1,
    sideIcon: <WhiteDone />,
    itemName: "Mark as done",
  },
  {
    id: 2,
    sideIcon: <Delete />,
    itemName: "Delete",
  },
];
export const doneAction = [
  {
    id: 1,
    sideIcon: <Pending />,
    itemName: "Move to Pending",
  },
  {
    id: 2,
    sideIcon: <Delete />,
    itemName: "Delete",
  },
];
export const todoCardAction = [
  {
    id: 1,
    itemName: "Todo",
  },
  {
    id: 2,
    itemName: "Pending",
  },
  {
    id: 3,
    itemName: "Done",
  },
];

