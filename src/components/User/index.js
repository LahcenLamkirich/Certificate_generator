import React, {useState, useEffect, useRef} from 'react'
import NavBar from '../admin/navAdmin'
import coverr from './coverr.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios' 
import { componentsToColor } from 'pdf-lib';

const User = () => {

    // const [image, setImage] = useState(null)
    // const canvas  = useRef(null)
    // const [topText, setTopText] = useState('')
    // const [bottomText, setBottomText] = useState('')


    
    // useEffect(() => {
    //     const certificatImage = new Image()
    //     certificatImage.src = coverr 
    //     certificatImage.onload = () => setImage(certificatImage) 
    //     console.log("The image is " + image) 
    // }, [])


    // useEffect(()=>{
    //     if(image && canvas) {
    //         const ctx = canvas.current.getContext("2d")
    //         ctx.fillStyle = 'black';
    //         ctx.fillRect(0, 0, 800, 500+90);
    //         ctx.drawImage(image, 2000 , 1414)

    //         ctx.font = "20px Comic Sans MS"
    //         ctx.fillStyle = "white"
    //         ctx.textAlign = "center"
      
    //         ctx.fillText(topText, (800 / 2), 20)
    //         ctx.fillText(bottomText, (800 / 2), 500 + 40 + 30)
    //     }
    // },[image,canvas,topText, bottomText])


    const [image, setImage] = useState(null)
    // in Here we need Da moh to ada the cors in the sever side  : 
    

    useEffect(()=>{
        axios.get("https://mdbootstrap.com/img/new/standard/nature/184.jpg")
        .then(resp => {
            console.log("The data is here " + resp);
            setImage(resp.data) 
        }) ;
    },[])

    return (
        <div>
            <NavBar />
            {/* <div>
                <canvas style={{textAlign: "center"}}
                    ref = {canvas}
                    width={800}
                    height={500 + 80 }
                />
            </div>

            <div>
            <input type="text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
            />
            <br />
            <input type="text"
            value={bottomText} 
            onChange={e => setBottomText(e.target.value)}
            />
        </div> */}

        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div class="card">
                        <img
                            src= "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            className="card-img-top"
                            alt="the image is here"
                        />
                        <div className="card-body">
                            <h5 className="card-title">PYTHON</h5>
                            <a href="#!" className="btn btn-primary">Downolad</a>
                        </div>
                    </div>
                </div>
                {/* <div class="col-sm-4">
                    <div class="card">
                        <img
                            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">JS</h5>
                            <a href="#!" class="btn btn-primary">Downolad</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img
                            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">C</h5>
                            <a href="#!" class="btn btn-primary">Downolad</a>
                        </div>
                    </div>
                </div>*/}

            </div> 

            </div>
        </div>
    )
}

export default User
