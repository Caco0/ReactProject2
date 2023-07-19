import './App.css';
import { AppContext } from './components/contexts/AppContext';
import { Div } from './components/Div/index';
function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
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
