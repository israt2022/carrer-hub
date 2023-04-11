import React from 'react';

const Blog = () => {
  return (
    <div className='my-container'>
        <div className='bg-gray-200 rounded-lg p-4 m-4'>
          <h1>1. When should you used context API?</h1>
          <p>Ans: Context provides a way to pass data through the component tree without having to pass props down manually at every level.In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
        </div>
        <div className='bg-gray-200 rounded-lg p-4 m-4'>
          <h1>2. What is custom hook?</h1>
          <p>Ans: Custom hook is completely separate logic from user interface. Reusable in many different components with the same processing logic. Therefore, the logic only needs to be fixed in one place if it changes.The logic is too long and complicated, we can write it in another file, so that the component is shorter and easier to read.
            *As a function, it takes input and returns output.
            *Its name starts with use like useQuery, useMedia, etc.
            *Unlike functional components, custom hooks return a normal, non-jsx data.
            *Unlike normal functions, custom hooks can use other hooks such as useState, useRef, etc and other custom hooks.</p>
        </div>
        <div className='bg-gray-200 rounded-lg p-4 m-4'>
          <h1>3. What is useRef?</h1>
          <p>Ans: useRef is a React Hook that lets you reference a value that's not needed for rendering.The useRef hook returns a mutable object which doesn't re-render the component when it's changed. Think it like useState, but unlike useState, doesn't trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.</p>
        </div>
        <div className='bg-gray-200 rounded-lg p-4 m-4'>
          <h1>4. What is useMemo?</h1>
          <p>Ans: useMemo is a hook that is used in the functional component of React that returns a memoized value.  The basic purpose of the useMemo hook is related to the fact that we try to avoid the unnecessary re-rendering of components and props in our program. We want to make sure that only the components that witness a change in their values are re-rendered; otherwise, there's no need to re-render the component and slow down the performance. Only re-rendering certain components will make the program efficient and improve the overall performance of the React app.</p>
        </div>
    </div>
  );
};

export default Blog;