import React from 'react';
import BlogContextDemo from './BlogContextDemo'

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Varun"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Veena"
  }
};

export const BlogContext  = React.createContext(blogInfo);

export default function App() {
  return (
    <div className="App">
      <div>
      <h1>Hello Kaleema</h1>
      <BlogContext.Provider value={blogInfo}>
           <BlogContextDemo />
      </BlogContext.Provider>
      </div>
    </div>
  );
}
