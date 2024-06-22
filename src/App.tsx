import './App.scss'
import { TCards, Card } from './Components/Card/Card'

function App() {

  const cardElements: TCards = {
    title: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    button: '#',
    
  }
  const cardWithoutImg: TCards = {
    title: 'Special title treatment',
    description: 'With supporting text below as a natural lead-in to additional content.',
    button: '#'
  }
  const image = './img/Cap_image.png'

  return (
    <>
      <Card {...cardElements}>
        <img className='card-img-top' src={image} alt="Image cap" />
      </Card>
      <Card {...cardWithoutImg}></Card>
    </>
  )
}

export default App
