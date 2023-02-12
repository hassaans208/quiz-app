// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PakFlag from './pak.png'
// import PakFlag from './php.png'

function Home() {
    let standard = [
        {
            id:1,
            title: "Some Title",
            pages: [
                {
                    name: "some",
                    link: "some"
                },
                {
                    name: "some",
                    link: "some"
                },
                {
                    name: "some",
                    link: "some"
                }
            ],
        },
        {
            id:2,
            title: "Some ",
            pages: [
                {
                    name: "Kind",
                    link: "Kind"
                },
                {
                    name: "Kind",
                    link: "Kind"
                },
                {
                    name: "Kind",
                    link: "Kind"
                }
            ],
        }
    ]
    return (
        <div className='flex flex-row flex-wrap  gap-x-4 my-3'>
            {
                standard.map((s) => {
                    return (

                        <div className='flex flex-col bg-gray-100 border border-slate-500' key={s.id}>
                            <h4 className='uppercase text-center text-xl mx-3'>{s.title}</h4>
                            <div className='flex flex-col mx-3 my-4'>
                                {
                                    s.pages.map((p) => {
                                        return (
                                            <a href={p.link}> {p.name}</a>
                                        )
                                    })

                                }
                            </div>
                        </div>
                    )
                })

            }
            <div className='flex flex-col'>
                <p>Hassaan</p>
            </div>
        </div >);
}

export default Home;

