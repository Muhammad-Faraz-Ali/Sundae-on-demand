import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
function ToppingOption({ name, imagePath, updateItemCount }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ texAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        alt={`${name} topping`}
        src={`http://localhost:3030/${imagePath}`}
      ></img>
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
          label={name}
        />
      </Form.Group>
    </Col>
  );
}

export default ToppingOption;
