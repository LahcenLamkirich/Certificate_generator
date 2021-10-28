import React, {useState, useEffect /*useRef*/} from 'react'
import NavBar from '../admin/navAdmin'
//import coverr from './coverr.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios' 
//import { componentsToColor } from 'pdf-lib';

const User = () => {

    const [formationsName, setFormationsName] = useState([])
    
    useEffect(()=>{

        axios.get('http://localhost:3333/participants/findFormations') 
        .then(resp =>{
            console.log("Le nom de la formation est " , resp.data); 
            setFormationsName(resp.data); // the change is here !!

        }).catch(err =>{
            alert("Try Again !!");          
        })

    },[])

    return (
        <div>
            <NavBar />

                <div className="container" style={{width: "100%"}}>
                    <div className="row">
                        {formationsName.map(formation => {
                            return (
                                <div className="col-sm-4">
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
                                            <a href="#!" className="btn btn-primary" style={{marginLeft: '35%'}}> Downolad </a>
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

