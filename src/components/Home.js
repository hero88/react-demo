import imgSeafood from '../assets/img/0002211_tropical-sf_300.png';
import imgSpaghetti from '../assets/img/0002258_spaghetti-bolognese_300.png';
import imgNoodle from '../assets/img/0002821_bbq-ck-w-sweet-sour-sauce-macaroni_500.png';
import imgSalad from '../assets/img/0002600_chicken-strip-salad_500.png';
import {Col, Row, CardImg, CardBody, CardFooter, Card} from 'reactstrap';

export default function Home() {
    const menu = [
        {
            photo: imgSeafood,
            name: 'Pizza Hải Sản Nhiệt Đới',
            description: 'Tôm, nghêu, mực cua, dứa với sốt Thousand Island',
            price: 139000
        },
        {
            photo: imgSpaghetti,
            name: 'Mỳ Ý thịt bò bằm',
            description: 'Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý',
            price: 129000
        },
        {
            photo: imgNoodle,
            name: 'Nui Bỏ Lò Gà BBQ Sốt Hương',
            description: 'Sự kết hợp hoàn hảo giữa thịt gà BBQ và sốt hương nhu cùng nhiều nguyên liệu tạo mùi thơm hấp dẫn như rau quế, ớt, hành tây, tỏi…khiến hương vị thêm đậm đà',
            price: 59000
        },
        {
            photo: imgSalad,
            name: 'Salad Gà Giòn Không Xương',
            description: 'Salad Gà giòn với trứng cút, thịt xông khói, phô mai parmesan và sốt Thousand Island',
            price: 79000
        },
    ];

    return(
        <div className="container">
            <h1 className="text-center"> Welcome Home! </h1>
            <Col sm='12'>
                <Row>
                {
                    menu.map((element, index) => 
                    <Col 
                        sm={3}                         
                        key={index}
                        xs='auto'
                    >
                        <Card className='mb-2'>
                            <CardImg src={element.photo} top alt='photo_something' style={{objectFit:'cover'}} width='250px' height='250px'/>                   
                            <CardBody>
                                <h5 style={{whiteSpace: 'pre', textOverflow: 'ellipsis', overflow:'hidden'}}>{element.name}</h5>
                                <p style={{whiteSpace: 'pre', textOverflow: 'ellipsis', overflow:'hidden'}}>{element.description}</p>
                            </CardBody>
                            <CardFooter>
                                <h4>Giá tiền:</h4>
                                <p className='text-danger'>{element.price.toLocaleString()} VND </p>
                            </CardFooter>
                        </Card>
                    </Col>
                    )
                }
                </Row>                
            </Col>
        </div>
    )
}