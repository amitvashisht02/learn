import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Profile from './example/Profile.jsx'
import Gallery from './example/Gallery.jsx'
import Avatar from './example/Avatar.jsx'
import TodoList from './example/TodoList.jsx'
import TodoList2 from './example/TodoList2.jsx'
import TodoList3 from './example/TodoList3.jsx'
import Profile2 from './example/Profile2.jsx'
import Profile3 from './example/Profile3.jsx'
import Profile4 from './example/Profile4.jsx'
import Profile7 from './example/Profile7.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Profile /> */}
      {/* <Gallery /> */}
      {/* <Avatar /> */}
      {/* <TodoList /> */}
      {/* <TodoList2 /> */}
      {/* <TodoList3 /> */}
      {/* <Profile2 /> */}
      {/* <Profile3 /> */}
      {/* <Profile4 /> */}
      <Profile7 /> 
    </div>

//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
  )
}

export default App
