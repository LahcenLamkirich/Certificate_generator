import React, {useState, useEffect /*useRef*/} from 'react'
import NavBar from '../admin/navAdmin'
import './user.css';
//import coverr from './coverr.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios' 
import { ToastContainer, toast } from 'react-toastify';
import jsPDF from 'jspdf';
//import { componentsToColor } from 'pdf-lib';

const User = () => {

    const [formationsName, setFormationsName] = useState([])
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")

    const NotifyUser = (message) => toast.success(message, {position: "bottom-center"}, { delay: 100 })
    // the use effect 
    useEffect(()=>{
        setFormationsName(JSON.parse(localStorage.getItem('formations')));
        setNom(localStorage.getItem("nom"))
        setPrenom(localStorage.getItem("prenom"))
    },[])

    // {
    //     name: '....',
    //     userNameOffsetX: 152,
    //     userNameOffsetY: 458
    //     userNameColor: ''
    // }

    const pdfGenerate = ({formation}) => {
        console.log('>>', formation);
        console.log("the formation is ", formationsName)
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        let image = `http://localhost:3333/images/${formation}.jpg`
        doc.addImage(image, 'JPG', 65,20, 500, 400)
        doc.setFont("Roboto")
        doc.setFontSize(20)
        doc.text("Mohamed Neddam", 260, 230,0)
        doc.save("Mycertificat.pdf")
    };


    return (
        <div>
            <NavBar />

                <div className="container" style={{width: "100%"}}>
                    <div className="row">
                        {formationsName.map((formation, index) => {
                            return (
                                <div className="col-sm-4" key={index}> 
                                    <div style={{padding: "10px"}}></div>
                                    <div className="card">
                                        <img
                                            style={{ width: "100%", height: "300px"}}
                                            src= {`http://localhost:3333/images/${formation}.jpg`}
                                            className="card-img-top"
                                            alt="the image is here"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign: 'center'}}> The Formation is : <span style = {{color: "#20B2AA", fontWeight: "bold", background: "white"}}> {formation} </span></h5>
                                            <button onClick={() => pdfGenerate({formation})} className="btn btn-primary" style={{marginLeft: '35%'}}> Downolad </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div> 
                    
                </div>
        </div>
    )
}

export default User

