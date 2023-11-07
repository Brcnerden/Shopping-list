import Form from "react-bootstrap/Form";

function Product() {
  return (
    <>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="product name"
        />
        <label htmlFor="floatingInputCustom">Product Name</label>
      </Form.Floating>
    </>
  );
}

export default Product;
