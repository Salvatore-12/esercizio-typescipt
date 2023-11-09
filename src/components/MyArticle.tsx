import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reservation from './interface/reservation';
import { Row } from 'react-bootstrap';




const MyArticle = () => {
  const [news, setNews] = useState<reservation[]>([])
  useEffect(() => {
fetch(' https://api.spaceflightnewsapi.net/v4/articles')
.then((res) => {
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Error')
  }
})
.then((data) => {
console.log('data trovata', data)
  setNews(data.results)
})
.catch((err) => {
  console.log('Error nella fetch', err)
})
  })
  return (
    <div>
 {news.map((r) => { 
       return(
        <Row className='fs-5'>
           
     <Card key = {r.id}>
      <Card.Img variant="top" src={r.image_url} />
      <Card.Body>
        <Card.Title>{r.title}</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
    
       ) 
      }
      )}

    </div>
  );
}

export default MyArticle;