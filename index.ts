#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList: string[] = [];
let conditions = true;
                    
console.log(chalk.yellowBright("\nWelcome to my todo list app!\n"));
   
let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
        {
            name:"choices",
            type:"list",
            message:"select an option you want to do:",
            choices:["Add Task","Delete task","Update task","View todo list","Exit"]
        }

        ]);
                  
        if(option.choices === "Add Task"){
            await addTask();
        }
        
        else if(option.choices === "Delete task"){
            await deleteTask();
        }
        else if(option.choices === "Update task"){
            await updateTask();
        }
        else if(option.choices === "View todo list"){
            await viewList();
        }
        else if(option.choices === "Exit"){
            console.log(chalk.yellowBright("\nThank you for using my app!\n"));
            conditions = false;
        }
        else{
            console.log(chalk.redBright("\nInvalid option!\n"));
        }


    }
}

let addTask = async () => {
                
    let task = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your task:"
        }

    ]);
    todoList.push(task.task);
    console.log(chalk.greenBright("\nTask added successfully!\n"));

}
let deleteTask = async () => {
    let index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the index of the task you want to delete:"
        }
    ]);
    todoList.splice(index.index,1);
    console.log(chalk.redBright("\nTask deleted successfully!\n"));
}
let updateTask = async () => {
    let index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the index of the task you want to update:"
        }
    ]);
    let newTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter the new task:"
        }
    ]);
    todoList[index.index] = newTask.task;
    console.log(chalk.yellowBright("\nTask updated successfully!\n"));
}

let viewList = async () => {
    console.log(chalk.blueBright("\nYour todo list:\n"));
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}



main();


