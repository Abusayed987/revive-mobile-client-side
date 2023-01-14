import React from 'react';

const Question = () => {
    return (
        <div className='lg:w-11/12 mx-auto '>
            <div className=' border rounded my-10  '>
                <div className='p-5'>
                    <h1 className='text-xl font-semibold'>1. What are the different ways to manage a state in a React application?</h1>
                    <p className='text-lg mt-3 ml-10'><b>Ans: </b>
                        There are several ways to manage state in a React application: <br />
                        <b> 1.</b> Use the Context API: The Context API is a built-in feature of React that allows you to share state between components without passing props down through multiple levels of the component hierarchy. <br />
                        <b> 2.</b> Use hooks: React hooks are functions that allow you to use state and other React features in functional components. Some hooks like useState and useReducer are used specifically for state management. <br />
                        <b> 3.</b> Use React's built-in state management feature: Each React component has a built-in state object that can be used to store and manage component-specific sta
                    </p>
                </div>
            </div>
            <div className=' border rounded my-10  '>
                <div className='p-5'>
                    <h1 className='text-xl font-semibold'>2. How does prototypical inheritance work?</h1>
                    <p className='text-lg mt-3 ml-10'><b>Ans: </b>
                        Prototypical inheritance is a mechanism in which an object can inherit properties and methods from a prototype object in JavaScript. Each object has a special property called "prototype" that points to its prototype object. When an object tries to access a property or method that it does not have, the JavaScript interpreter looks for that property or method in the object's prototype, and if it can't find it, it continues to look up the prototype chain until it reaches the top-most prototype object. This creates a chain of objects that can access properties and methods from their parent objects.
                    </p>
                </div>
            </div>
            <div className=' border rounded my-10  '>
                <div className='p-5'>
                    <h1 className='text-xl font-semibold'>3. What is a unit test? Why should we write unit tests?</h1>
                    <p className='text-lg mt-3 ml-10'><b>Ans: </b>
                        unit tests are a way of automatically testing individual units of code, helping developers to detect bugs early, improving code quality and making it easy to refactor and understand the codebase. <br />
                        There are several reasons why it is beneficial to write unit tests: <br />
                        <b>1.</b> Early detection of bugs: Unit tests can help identify bugs early in the development process, which can save time and effort in the long run. <br />
                        <b>2.</b> Improved code quality: Writing unit tests can help developers write better code by encouraging them to think about how the code will be used and by making it easier to identify and fix bugs. <br />
                        <b>3.</b> Better documentation: Unit tests can serve as a form of documentation, making it easier for other developers to understand how the code works and how it should be used.
                    </p>
                </div>
            </div>
            <div className=' border rounded my-10  '>
                <div className='p-5'>
                    <h1 className='text-xl font-semibold'>4. React vs. Angular vs. Vue?</h1>
                    <p className='text-lg mt-3 ml-10'><b>Ans: </b>
                        React, Angular, and Vue are all popular JavaScript libraries and frameworks for building web applications. Each one has its own strengths and weaknesses, and the choice between them often depends on the specific needs of the project and the preferences of the development team. <br />
                        <b className='text-sm'>React::</b> <br />
                        <b>1.</b> React is a JavaScript library for building user interfaces. It was developed and is maintained by Facebook. <br />
                        2. React uses a virtual DOM (Document Object Model) which optimizes updates and reduces the number of DOM operations. <br />
                        3. React focuses on building reusable UI components, and it's often used with Redux for state management. <br />
                        4. React is highly popular, widely adopted and has a large community support. <br />
                        <b className='text-sm'>Angular::</b> <br />
                        1. Angular is a complete JavaScript framework for building web applications. It was developed and is maintained by Google.
                        2. Angular uses a two-way data binding which allows for automatic updates between the model and view layers.
                        3. Angular is built around a powerful template engine that allows for declarative component-based development. <br />
                        <b className='text-sm'>Angular::</b> <br />
                        1. Vue is a JavaScript framework for building user interfaces. It was created by a former Google employee. <br />
                        2. Vue uses a template system and a virtual DOM, similar to React. <br />
                        3. Vue also supports a two-way data binding similar to Angular.
                        4. Vue is easy to learn and has a smaller footprint than Angular and React, making it a good choice for small to medium-sized projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Question;