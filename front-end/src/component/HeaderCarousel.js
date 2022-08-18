import Carousel from 'react-bootstrap/Carousel'
import ReadMoreBtn from './ReadMoreBtn'
import {Media} from 'react-breakpoints'

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
         
          <Media>
            {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] >= breakpoints.desktop 
          ?  (
            <Carousel.Caption 
        className='gradient-custom d-flex align-items-center justify-content-center flex-column'>
            <div className='d-flex flex-column align-items-center w-50'>
            <h2 className='big-font text-light h-2 font-1em'>{n.title}</h2>
            <p>{reduceText(n.text)}</p>
            <ReadMoreBtn text='READ MORE' />
          </div>
          </Carousel.Caption>
          )
          : (
            <Carousel.Caption 
            className='gradient-custom d-flex align-items-center justify-content-center flex-column'>
            <div className='d-flex flex-column align-items-center gap-2 w-75 mxModify-auto justify-content-around'>
            <h2 className='big-font text-light h-4 font-1em'>{n.title}</h2>
            <ReadMoreBtn text='READ MORE' />
          </div>
          </Carousel.Caption>
          )
        }
          </Media>
          
        </Carousel.Item>
        ))}
        
    </Carousel>
    </>
  )
}

export default HeaderCarousel
