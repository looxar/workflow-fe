import Image from "next/image";

const name ="Looxar";
const age = 18;
const alive = true;
const App = () => {
  return <div>
    Hello,
    {name}
    {age}
    {alive}
  </div>
}

function ObjectRender() {
  const task = {
    title: "เบิกงบ",
    amount: 20,
  };
  return (
    <div>
      <h1>Task: {task.title}</h1>
      <p>${task.amount}</p>
    </div>
  );
}
export default ObjectRender;
// export default App; 