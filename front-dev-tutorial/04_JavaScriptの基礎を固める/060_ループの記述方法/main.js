const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to shop',
        completed: true
    },
    {
        id: 3,
        title: 'Go to museum',
        completed: false
    }
];

// for(let todo of todos) {
//     console.log(todo);
// }

const newTodos = todos
    .map(function (todo) {
        todo.id = todo.id + 10;
        return todo;
    }).filter(function (todo) {
        return todo.completed === true;
    }).reduce(function(acc, curr) {
        return acc + curr.title + '\n';
    }, "");

console.log(newTodos);

// const arry = [1,2,3,4,5,6];

// arry.reduce(function(acc, curr, index) {
//     console.log(index, acc, curr)
//     return acc + curr * 2;
// }, 0);