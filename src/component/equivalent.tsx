function ObjectRender(props: {
    title: string;
    amount?: number;
  }) {
    return (
      <div>
        <h1>Task: {props.title}</h1>
        <p>${props.amount ? props.amount : "-"}</p>
      </div>
    );
  }

  function ObjectRender2(props: { title: string; amount?: number }) {
    return (
      <div>
        <h1>Task: {props.title}</h1>
        <p>${props.amount || "-"}</p>
      </div>
    );
  }

  export default ObjectRender

  function App() {
    const task = {
        title: "เบิกงบ",
        amount: 20,
    };
    // render
    return <ObjectRender title={task.title} />
  }
  