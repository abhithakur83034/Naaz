"use client"
import React from 'react';
import { Container, Form, Button,Col,Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from 'yup'; 

const AddProductPage = () => {
    const productSchema = yup.object().shape({
        product_name: yup.string().required("Product name must be required").min(3, "Please enter a valid product name"),
        category: yup.string().required("Category must be required"),
        // sub_category: yup.string().required("Sub category must be required"),
        image: yup.mixed().required("Please select an image"),
        color: yup.string().required("Color must be required").min(3, "Please enter a valid color"),
        size: yup.string().required("Size must be required"),
        discount_price: yup.number().required("Discount price must be required").min(10, "Discount price must be at least 10"),
        total_price: yup.number().required("Total price must be required").min(10, "Total price must be at least 10"),
        description: yup.string().required("Description must be required").min(20, "Description must be at least 20 characters"),
    });

    const productResolver = {
        mode: "onChange",
        resolver: yupResolver(productSchema),
    };

    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
        setError
    } = useForm(productResolver);

    const onSubmit = (data:any) => {
        console.log(data);
    };

    return (
      <Container className="add-product-container">
      <div className="add-product-form">
          <h1>Add Product</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                  <Col>
                      <Form.Group controlId="productName">
                          <Form.Label>Product Name</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Enter product name"
                              {...register('product_name')}
                          />
                          {errors.product_name && <span className="error-message">{errors.product_name.message}</span>}
                      </Form.Group>
                      <Form.Group controlId="category">
                          <Form.Label>Category</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Enter category"
                              {...register('category')}
                          />
                          {errors.category && <span className="error-message">{errors.category.message}</span>}
                      </Form.Group>
                      {/* <Form.Group controlId="subCategory">
                          <Form.Label>Sub Category</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Enter sub category"
                              {...register('sub_category')}
                          />
                          {errors.sub_category && <span className="error-message">{errors.sub_category.message}</span>}
                      </Form.Group> */}
                      <Form.Group controlId="productImage">
                          <Form.Label>Product Image</Form.Label>
                          <Form.Control
                              type="file"
                              accept="image/*"
                              {...register('image')}
                          />
                          {errors.image && <span className="error-message">{errors.image.message}</span>}
                      </Form.Group>
                      <Form.Group controlId="color">
                          <Form.Label>Color</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Enter color"
                              {...register('color')}
                          />
                          {errors.color && <span className="error-message">{errors.color.message}</span>}
                      </Form.Group>
                  </Col>
                  <Col>
                      <Form.Group controlId="size">
                          <Form.Label>Size</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Enter size"
                              {...register('size')}
                          />
                          {errors.size && <span className="error-message">{errors.size.message}</span>}
                      </Form.Group>
                      <Form.Group controlId="discountPrice">
                          <Form.Label>Discount Price</Form.Label>
                          <Form.Control
                              type="number"
                              placeholder="Enter discount price"
                              {...register('discount_price')}
                          />
                          {errors.discount_price && <span className="error-message">{errors.discount_price.message}</span>}
                      </Form.Group>
                      <Form.Group controlId="totalPrice">
                          <Form.Label>Total Price</Form.Label>
                          <Form.Control
                              type="number"
                              placeholder="Enter total price"
                              {...register('total_price')}
                          />
                          {errors.total_price && <span className="error-message">{errors.total_price.message}</span>}
                      </Form.Group>
                      <Form.Group controlId="description">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Enter description"
                              {...register('description')}

                          />
                          {errors.description && <span className="error-message">{errors.description.message}</span>}
                      </Form.Group>
                  </Col>
              </Row>
              <Button variant="primary" type="submit">Add Product</Button>
          </Form>
      </div>
  </Container>

    );
};

export default AddProductPage;
