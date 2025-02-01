import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

function CustomForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position:'absolute'}}>
    <div className="mt-5 pt-4" >
      <Container className="eggsale-form">
        <h2 className="text-center mb-4">Form Validation</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <Form.Group className="mb-4 " controlId="first">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              {...register("first", { required: "First name is required" })}
              isInvalid={!!errors.first}
            />
            <Form.Control.Feedback type="invalid">
              {errors.first?.message}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-4" controlId="last">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              {...register("last", { required: "Last name is required" })}
              isInvalid={!!errors.last}
            />
            <Form.Control.Feedback type="invalid">
              {errors.last?.message}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-4" controlId="mail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("mail", { required: "Email is required" })}
              isInvalid={!!errors.mail}
            />
            <Form.Control.Feedback type="invalid">
              {errors.mail?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
    </div>
  );
}

export default CustomForm;
