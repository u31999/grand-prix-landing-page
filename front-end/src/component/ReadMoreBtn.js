import {Button} from 'react-bootstrap'

const ReadMoreBtn = ({text, addClass = ''}) => {
  return (
    <Button type='button' className={`btn-read-more ${addClass}`}>{text}</Button>
  )
}

export default ReadMoreBtn
