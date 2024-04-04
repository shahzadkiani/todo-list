#! /usr/bin/env 
import inquirer from "inquirer";
let todo = [];
while (true) {
    let selectOperation = await inquirer.prompt([
        {
            name: "selectOperation",
            type: "list",
            choices: ["Add Task", "Remove Task", "View List", "Exit"],
            message: "What do you want to do: ",
        },
    ]);
    if (selectOperation.selectOperation === "Exit") {
        console.log("Exiting!");
        break;
    }
    else if (selectOperation.selectOperation === "View List") {
        console.log("Here's the list of your todos");
        console.log("----------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------------");
    }
    else if (selectOperation.selectOperation === "Add Task") {
        let addTodo = await inquirer.prompt([
            {
                name: "addTodo",
                type: "input",
                message: "Enter your todo: ",
                choices: ["Add Task", "Remove Task", "View List", "Exit"],
            },
            {
                name: "confirm",
                type: "confirm",
                message: "Want to see options again? ",
            },
        ]);
        todo.push(addTodo.addTodo);
        console.log("Todo added successfully!");
        console.log(todo);
        if (!addTodo.confirm) {
            break;
        }
    }
    else if (selectOperation.selectOperation === "Remove Task") {
        let removeTodo = await inquirer.prompt([
            {
                name: "removeTodo",
                type: "input",
                message: "Enter the index of the todo you want to remove: ",
            },
        ]);
        todo.splice(removeTodo.removeTodo, 1);
        console.log("Todo removed successfully!");
        console.log(todo);
    }
}
