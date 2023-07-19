import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};
const GlobalContext = React.createContext();

//eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

//eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

//eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div></Div>
    </GlobalContext.Provider>
  );
}

// const Post = ({ post, handleClick }) => {
//   return (
//     <div key={post.id} className="post">
//       <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
//         {post.title}
//       </h1>
//       <p>{post.body}</p>
//     </div>
//   );
// };
// Post.propTypes = {
//   post: P.shape({
//     id: P.number,
//     title: P.string,
//     body: P.string,
//   }),
//   handleClick: P.func,
// };

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [value, setValue] = useState('');
//   const input = useRef(null);
//   const contador = useRef(0);

//   console.log('Pai renderizou!');

//   //Component did mount
//   useEffect(() => {
//     setTimeout(function () {
//       fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((r) => r.json())
//         .then((r) => setPosts(r));
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     input.current.focus();
//     console.log(input.current);
//   }, [value]);

//   useEffect(() => {
//     contador.current++;
//   });

//   const handleClick = (value) => {
//     setValue(value);
//   };

//   return (
//     <>
//       <div>
//         <h3>Renderizou {contador.current}X</h3>
//         <p>
//           <input
//             ref={input}
//             type="search"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//         </p>
//         {useMemo(() => {
//           return (
//             posts.length > 0 &&
//             posts.map((post) => {
//               return <Post key={post.id} post={post} handleClick={handleClick} />;
//             })
//           );
//         }, [posts])}
//         {posts.length <= 0 && <span className="load">Carregando...</span>}
//       </div>
//     </>
//   );
// }
export default App;
