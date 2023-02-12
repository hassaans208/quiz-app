import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
// import PakFlag from './pak.png'
// import PakFlag from './php.png'

function App() {
  return (
    // <h1>Hassaan</h1>
    <div className="flex flex-col border border-black justify-content-center">
      <div className='flex flex-row justify-between bg-gradient-to-r from-sky-500 to-indigo-500 align-center'>
        <div className='flex flex-row gap-x-2 my-2 mx-4'>
          <img src="" alt="logo" />
          <p className='text-white font-bold'>
            | My Quizes
          </p>
        </div>
        <div className='flex flex-row gap-x-3 me-3'>
          <button type="" className='bg-white m-2 px-3 py-1 border border-slate-800 hover:bg-indigo-900'>Home</button>
        </div>
      </div>
      <Container fluid className='border-2 border-black'>
        <Row lg={{ span: 6, offset: 6 }} className='bg-slate-900 text-white'>
          <Col className="text-center mt-4 mb-2">
            <h2 className='text-2xl'>Welcome to Quiz Web</h2>
            <p className='text-sm'>Challenge Your Knowledge</p>
          </Col>
        </Row>
<Home />
        {/* <Row lg={{ span: 6, offset: 6 }} className='bg-white border-2 border-x-0 border-black'>
          <Col className="text-center mt-1">
            <ProgressBar className='mx-2 h-2 m-2' variant='info' now={45} animated label={`45%`} />
          </Col>
        </Row>
        <Row lg={{ span: 6, offset: 6 }} className='bg-gray-200'>
          <Col className="flex justify-center m-2 text-center bg-gray-200">
            <div className='bg-gray-100'>
              <img src={PakFlag} alt="Flag Puzzle Not Loaded" className='self-center m-1 mx-4 my-3' />
            </div>
          </Col>
        </Row>
        <Container className='bg-white'>
          <Row lg={{ span: 6, offset: 6 }}>
            <Col className="text-center mt-4">
              <Button style={{ width: "300px" }} variant="info">Hypertext Preprocessor</Button>
            </Col>
          </Row>
          <Row lg={{ span: 6, offset: 6 }}>
            <Col className="text-center mt-1">
              <Button style={{ width: "300px" }} variant="info">JAVA</Button>
            </Col>
          </Row>
          <Row lg={{ span: 6, offset: 6 }}>
            <Col className="text-center mt-1">
              <Button style={{ width: "300px" }} variant="info">HTML</Button>
            </Col>
          </Row>
          <Row lg={{ span: 6, offset: 6 }}>
            <Col className="text-center mt-1 mb-5">
              <Button style={{ width: "300px" }} variant="info">CSS</Button>
            </Col>
          </Row>
        </Container> */}



      </Container>
    </div>
  );
}

export default App;

// proposal
// Title
// Main Idea