import './App.css';
import Blog from './components/Blog/Blog';
import FetchToDo from './components/FetchToDo/FetchToDo';
import Mobile from './components/Mobile/Mobile';

function App() {
  return (
    <div className="App">
      <article className='blog'>SOTO KONO KICHU LIKHTE PARO KINA! <p style={{color: 'aqua'}}>Paragraph Tag Here</p></article>
      <h2 style={{backgroundColor : 'black', color: 'white', border: '2px solid white', borderRadius: '30px', textAlign: 'center'}}>This is H2</h2>
      <Blog heading={'Heading 01'} author={'HM Athir'}></Blog>
      <Blog heading={'Heading 02'} author={'MD Jahid'}></Blog>
      <Blog heading={'Heading 03'} author={'Rashed'}></Blog>
      <Mobile></Mobile>
      <FetchToDo></FetchToDo>
    </div>
  );
}

export default App;
