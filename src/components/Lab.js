import '../App.css';
import { Container, Row, Col, Button, Progress } from "reactstrap";
import { useNavigate } from "react-router-dom";


function Lab() {
    const navigate = useNavigate();
    const password = "123";
    var count = 0;

    function bbtnclk() {
        navigate("/");
        alert("password entry again");
    }

    setTimeout(function bbtnclk() {
        navigate("/");
        alert("Your time finished");
    }, 600000)

    setInterval(function count() {
        for (var i = 600; i > 600; i--) {
            document.getElementById('timer').innerHTML = "Time is " + i + " Seconds";
        }
    }, 1000)

    return (

        <div className='bor bg-white'>
            <Container >
                <Row>
                    <Col className='borr'>
                        <Button onClick={bbtnclk} color="danger">
                            back
                        </Button>
                    </Col>
                    <Col className='borl'>
                        zicpos
                        zicpos
                        zicpos
                        zicpos
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col className='borr'>
                        zicpos
                        zicpos
                        zicpos
                        zicpos
                    </Col>
                    <Col className='borl' >
                        <h3 id="timer">Time limit is 10 Minutes.</h3>
                        <Progress
                            animated
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

export default Lab;
