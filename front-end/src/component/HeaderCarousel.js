import Carousel from 'react-bootstrap/Carousel'
import ReadMoreBtn from './ReadMoreBtn'

const HeaderCarousel = ({news}) => {
  const reduceText = (text) => {
    let newText
    if(text.length > 150) {
       newText = text.slice(0, 150) + '...'
    }else{
      newText = text + '...'
    }
    return newText
  } 

  if(news.length === 0) return <div>...loading</div>
  
  return (
    <>
      <Carousel>
      {news.map(n => (
        <Carousel.Item key={n.id}>
        <img
          className="d-block carousel-img"
          src={n.imgSrc}
          alt={n.title}
        />
        <Carousel.Caption 
        className='gradient-custom d-flex align-items-center justify-content-center flex-column'>
          <div className='d-flex flex-column align-items-center gap-4'>
          <h2 className='big-font text-light'>{n.title}</h2>
          
          <p>{reduceText(n.text)}</p>
          <ReadMoreBtn text='READ MORE' />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
        
    </Carousel>
    </>
  )
}

export default HeaderCarousel
