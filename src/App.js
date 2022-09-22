import Accordion from './Accordion';
import './App.css';
import chessImg from './img/chess.jpg'
import keyboardImg from './img/keyboard.jpg'
import loveImg from './img/love.jpg'

function App() {
  const data = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: loveImg
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: chessImg
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: keyboardImg
    },
  ]

  return (
    <div className="App">
      <h1>Accordion Menu</h1>
      <div className='accordion-container'>
        {data.map(x => <Accordion id={x.id} title={x.title} subtitle={x.subtitle} image={x.image} />)}
      </div>
    </div>
  );
}

export default App;
