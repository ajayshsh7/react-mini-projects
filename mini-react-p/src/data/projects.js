import Accordian from "../components/accordian/Accordion";
import Counter from "../components/simple-counter/Counter";
import Todo from "../components/simple-todo/Todo";

export const projects = [
  {
    id: 1,
    name: "Simple Counter",
    route: "/counter",
    component: Counter,
  },
  {
    id: 2,
    name: "Todo App",
    route: "/todo",
    component: Todo,
  },
  {
    id: 3,
    name: "Accordian",
    route: "/accordian",
    component: Accordian,
  },
];