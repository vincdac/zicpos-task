import '../App.css';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, Spinner, Progress } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Password() {

    const navigate = useNavigate();
    const password = "123";

    function btnclk() {
        if (password === "123") {
            <Spinner>
                Loading...
            </Spinner>
            navigate("/Lab");
        }
        else {
            alert("incorrect password.");
        }
    }

    return (
        <div className='border bg-dark'>
            <Container >
                <Row>
                    <Col className='borderr'>
                        zicpos
                        zicpos
                        zicpos
                    </Col>
                    <Col className='borderl'>
                        zicpos
                        zicpos
                        zicpos
                    </Col>
                </Row>
            </Container>

            <div>
                <Card style={{
                    width: '18rem'
                }} className="loc rounded-circle border-info bg-dark">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25968.png" width="90px" className='btns'></img>

                    <Form >
                        <FormGroup>
                            <Label
                                for="examplePassword"
                                className='card text-center'
                            >
                                ENTER YOUR LEARNING PASSWORD
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                                type="password"
                                className='text-center'
                            />
                        </FormGroup>
                        <Button onClick={btnclk} className='btns btn-lg text-dark bg-info'>
                            Enter Lab
                        </Button>
                    </Form>

                </Card>
            </div>
            <Container>
                <Row>
                    <Col className='borderr'>
                        zicpos
                    </Col>
                    <Col className='borderl text-white'>
                        Time limit is 10 Minutes.
                        <Progress
                            striped
                            className="my-3"
                            color="danger"
                            value="100"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Password;
