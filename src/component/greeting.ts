type format = 'Table' | 'Default';
interface GreetingParams {
  name: string;
  age: number;
  format?: 'Table' | 'Default';
}

function funcHi(task) {
  console.table({ name: task.name, age: task.age });
  console.log('Hi ', task.name);
}

function greeting(params: GreetingParams) {
  const task = {
    name: params.name,
    age: params.age,
    format: params.format ? params.format : 'funcHi',
  };
  // render
  // return <ObjectRender name={task.name} />
  if (task.format == 'funcHi') {
    funcHi(task);
  } else {
    console.table({ name: task.name, age: task.age, format: task.format });
  }
  // console.log(task.name);
  // console.log(task.age);
  // console.log(task.format);
}

greeting({
  name: 'Alice',
  age: 18,
  format: 'Table',
});

greeting({ name: 'Bob', age: 18, format: 'Default' });

greeting({ name: 'Charlie', age: 18 });

// greeting({ name: 'Bob', age: 18, format: 'abc' });