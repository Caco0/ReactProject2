import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O Título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('chamou muda com', action.payload);
      return { ...state, title: action.payload };
    case 'inverter': {
      console.log('chamou Inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('Nenhuma Action Encontrada!');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <>
      <div>
        <h1>
          {title} {counter}
        </h1>
        <button
          onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-br') })}
        >
          Click
        </button>
        <br />
        <br />
        <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
        <br />
        <br />
        <button onClick={() => dispatch({ type: '' })}>Sem ação</button>
      </div>
    </>
  );
}
export default App;

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
// export default App;
