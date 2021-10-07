import React,{ useState } from 'react' ;
import axios from 'axios';
import { Link, useHistory} from 'react-router-dom'
import './signin.css' ;

// import User from '../User/index';

const SingIn = () => {
    const [user, setUser] = useState({nom:"", prenom:""})
    const [showResults, setShowResults] = useState(false)
    const [erreur, setErreur] = useState("")
    const history = useHistory();

    const OnChangeNom = (e)=>{
        setUser({
            ...user,
            nom: e.target.value
        })
    }
    const OnChangePrenom = (e)=>{
        setUser({
            ...user,
            prenom: e.target.value
        })
    }

    const setToken = (token) => {
        localStorage.setItem("token", token);
    }

    const onClickLogin = ()=>{
        axios.post(`http://localhost:3333/users/signIn`,user) 
        .then((resp,res) => {
            if(resp.data.ERROR){
                setUser({
                    nom: "",
                    prenom: ""
                })
                setErreur(resp.data.ERROR);
                setShowResults(true)
            } else{
                setToken(resp.data.token)
                if(!resp.data.role.localeCompare("user")){
                    //window.location = "/user";
                    setShowResults(false)
                    history.push("/user");
                    // console.log("User") 
                    

                } else{
                    //window.location = "/admin";
                    setShowResults(false)
                    history.push("/admin");
                    // console.log("admin")
                    
                }
            }
        }).catch(err =>{
                alert("Try Again !!");          
        }) 
        
    }

    const Results = () => (
            <>
                {erreur}
            </>
        )

    return (
        <>
            <div className="Container">
                <div className="FormWrap">
                    <Link to="/" className="Icon"> JCI KENITRA </Link>                        
                    <div className="FormContent">
                        <div className="Form">
                            <h1 className="FormH1">Sign In to Get your Certificate</h1>
                            <div className="FormErreur">
                                { showResults ? <Results /> : null }
                            </div>
                            <label className="FormLabel" htmlFor="for">PRENOM</label>
                            <input className="FormInput" type="text" value={user.prenom} onChange={OnChangePrenom} placeholder="Prénom" required />
                            <label className="FormLabel" htmlFor="for">NOM</label>
                            <input className="FormInput" type="text" value={user.nom} onChange={OnChangeNom} placeholder="Nom" required />
                            <button className="FormButton" type="submit" onClick={onClickLogin}>Login</button>
                            <span className="Text">Forgot Password</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingIn