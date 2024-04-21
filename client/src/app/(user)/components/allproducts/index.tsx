'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 

const Page = () => {
    let router = useRouter();
    const storeUser = window.localStorage.getItem("user");
    let user = null;
    if (storeUser !== null) {
        user = JSON.parse(storeUser);
    }

    console.log(user);
    

    const productsData = [
        {
          id: 1,
          name: 'Lipstick',
          price: '$10',
          description: 'Long-lasting lipstick in various shades.',
          image: 'images/l1.jpeg',
        },
        {
          id: 2,
          name: 'Lipstick',
          price: '$15',
          description: 'Volumizing mascara for fuller lashes.',
          image: 'images/l1.jpeg'
        },
        {
          id: 3,
          name: 'Lipstick',
          price: '$20',
          description: 'Matte finish foundation for all-day wear.',
          image: 'images/l1.jpeg'
        },
        {
          id: 4,
          name: 'Lipstick',
          price: '$8',
          description: 'Waterproof eyeliner for all-day wear.',
          image: 'images/l1.jpeg'
        }
    ];

    const listProducts = [
        {
            id: 1,
            name: 'Lipstick',
            price: '$10',
            description: 'Long-lasting lipstick in various shades.',
            image: 'images/l1.jpeg',
        },
        {
            id: 2,
            name: 'Mascara',
            price: '$15',
            description: 'Volumizing mascara for fuller lashes.',
            image: 'images/m.jpeg'
        },
        {
            id: 3,
            name: 'Foundation',
            price: '$20',
            description: 'Matte finish foundation for all-day wear.',
            image: 'images/f.jpeg'
        },
        {
            id: 4,
            name: 'Eyeliner',
            price: '$8',
            description: 'Waterproof eyeliner for all-day wear.',
            image: 'images/e.png'
        }
    ];


    let handleCart=(id:any)=>{
       if(user){
           console.log('Clicked',id)
           alert('Product added to cart.')
       }else{
             alert('Please Login First.')
       }
        
    }

    const handleProductClick = (item:any) => {
        const navigationConfig = {
            Lipstick: '/lips',
            Foundation: '/face',
            Mascara: '/eyes',
            Eyeliner: '/eyes'
        };
    
        const destination = navigationConfig[item];
        if (destination) {
            router.push(destination);
        }
    };
    
    
    return (
        <Container fluid className='ap-container'>
            <Row>
                {productsData.map(product => (
                    <Col key={product.id} className='my-3'>
                        <Card className='ap-card'>
                            <Card.Img src={product.image} height={200} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                            </Card.Body>
                            <Card.Footer className='ap-cardHoverContent'>
                                <small className='text-muted'>{product.description}</small>
                                <Button variant="primary" className="add-to-cart-btn" onClick={()=>{handleCart(product.id)}} >Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
    {listProducts.map(product => (
        <Col key={product.id} className='my-3'>
            <div onClick={() => handleProductClick(product.name)}>
                <Card className='ap-card'>
                    <Card.Img src={product.image} height={200} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    ))}
</Row>

        </Container>
    );
}

export default Page;
