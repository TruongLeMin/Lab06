import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        {
            id: 1,
            question: "Inside which HTML element do we put the JavaScript?",
            options: ["javascript", "scripting", "script", "js"],
            correctAnswer: "script",
        },
        {
            id: 2,
            question: "What are variables used for in JavaScript Programs?",
            options: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of these"],
            correctAnswer: "Storing numbers, dates, or other values",
        },
        {
            id: 3,
            question: "Which of the following can't be done with client-side JavaScript?",
            options: ["Validating a form", "Sending a form's contents by email", "Storing the form's contents to a database file on the server", "None of these"],
            correctAnswer: "Storing the form's contents to a database file on the server",
        },
        {
            id: 4,
            question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n<p id='demo'>This is a demonstration.</p>",
            options: ["document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElementByName('demo').innerHTML = 'Hello World!';", "document.getElementById('demo').value = 'Hello World!';", "document.getElement('demo').innerHTML = 'Hello World!';"],
            correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';",
        },
        {
            id: 5,
            question: "Where is the correct place to insert a JavaScript?",
            options: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct"],
            correctAnswer: "Both the <head> section and the <body> section are correct",
        },
        {
            id: 6,
            question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
            options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
            correctAnswer: "<script src='xxx.js'>",
        },
        {
            id: 7,
            question: "The external JavaScript file must contain the <script> tag.",
            options: ["True", "False"],
            correctAnswer: "False",
        },
        {
            id: 8,
            question: "How do you write 'Hello World' in an alert box?",
            options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
            correctAnswer: "alert('Hello World');",
        },
        {
            id: 9,
            question: "How do you create a function in JavaScript?",
            options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "myFunction():function"],
            correctAnswer: "function myFunction()",
        },
        {
            id: 10,
            question: "How do you call a function named 'myFunction'?",
            options: ["call myFunction()", "call function myFunction()", "myFunction()", "execute myFunction()"],
            correctAnswer: "myFunction()",
        },
        {
            id: 11,
            question: "How to write an IF statement in JavaScript?",
            options: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"],
            correctAnswer: "if (i == 5)",
        },
        {
            id: 12,
            question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
            options: ["if (i != 5)", "if i <> 5", "if (i <> 5)", "if i =! 5 then"],
            correctAnswer: "if (i != 5)",
        },
        {
            id: 13,
            question: "How does a WHILE loop start?",
            options: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "while (i => 10)"],
            correctAnswer: "while (i <= 10)",
        },
        {
            id: 14,
            question: "How does a FOR loop start?",
            options: ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)"],
            correctAnswer: "for (i = 0; i <= 5; i++)",
        },
        {
            id: 15,
            question: "How can you add a comment in JavaScript?",
            options: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", "/* This is a comment */"],
            correctAnswer: "//This is a comment",
        },
        {
            id: 16,
            question: "How to insert a comment that has more than one line?",
            options: ["<!--This comment has more than one line-->", "//This comment has more than one line//", "/*This comment has more than one line*/", "/This comment has more than one line/"],
            correctAnswer: "/*This comment has more than one line*/",
        },
        {
            id: 17,
            question: "What is the correct way to write a JavaScript array?",
            options: ["var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
            correctAnswer: "var colors = ['red', 'green', 'blue']",
        },
        {
            id: 18,
            question: "How do you round the number 7.25 to the nearest integer?",
            options: ["round(7.25)", "Math.round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"],
            correctAnswer: "Math.round(7.25)",
        },
        {
            id: 19,
            question: "How do you find the number with the highest value of x and y?",
            options: ["ceil(x, y)", "Math.ceil(x, y)", "Math.max(x, y)", "max(x, y)"],
            correctAnswer: "Math.max(x, y)",
        },
        {
            id: 20,
            question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
            options: ["w2 = window.new('http://www.example.com');", "w2 = window.open('http://www.example.com');", "w2 = new.window('http://www.example.com');", "w2 = open.window('http://www.example.com');"],
            correctAnswer: "w2 = window.open('http://www.example.com');",
        },
    ],
    userAnswers: {},
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setUserAnswer: (state, action) => {
            const { questionId, answer } = action.payload;
            state.userAnswers[questionId] = answer;
        },
    },
});

export const { setUserAnswer } = quizSlice.actions;

export default quizSlice.reducer;
