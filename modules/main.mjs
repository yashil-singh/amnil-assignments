/*
    Module
    A file that contains code to perfrom a specific task
    Supports code reusability
 */

// importing variables, and functions from imports file
import introduce, { initialGreeting as greeting } from "./modules.mjs"; // {} not required for default exports
console.log(greeting);

introduce("Jack", "Good afternoon");
