import React, {useState, useEffect /*useRef*/} from 'react'
import NavBar from '../admin/navAdmin'
import './user.css';
//import coverr from './coverr.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios' 
import { ToastContainer, toast } from 'react-toastify';
//import { componentsToColor } from 'pdf-lib';

const User = () => {

    const [formationsName, setFormationsName] = useState([])
    const NotifyUser = (message) => toast.success(message, {position: "bottom-center"}, { delay: 100 })
    // the use effect 
    useEffect(()=>{
        setFormationsName(JSON.parse(localStorage.getItem('formations')));
    },[])


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
                                            <button href="https://www.npmjs.com/package/react-pdf" className="btn btn-primary" style={{marginLeft: '35%'}}> Downolad </button>
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

