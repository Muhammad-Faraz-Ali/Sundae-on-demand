import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function ScoopOption({ imagePath, name, updateItemCount }) {
  const changeHandle = (event) => {
    updateItemCount(name, event.target.value);
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ texAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        alt={`${name} scoop`}
        src={`http://localhost:3030/${imagePath}`}
      ></img>
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Label column xs="6" style={{ textAlign: "right" }}>
            {name}
          </Form.Label>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={changeHandle}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}

export default ScoopOption;
