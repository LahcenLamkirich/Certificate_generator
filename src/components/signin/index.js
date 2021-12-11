import React,{ useState } from 'react' ;
import axios from 'axios';
import { Link, useHistory} from 'react-router-dom'
import './signin.css' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import User from '../User/index';

const SingIn = () => {
    const [user, setUser] = useState({nom:"", prenom:""})
    const [showResults, setShowResults] = useState(false)
    const [erreur, setErreur] = useState("")
    const history = useHistory();
    // la notification:
    const Notify = (message) => toast.error(message, {position: "top-center"}); // to seee
    //const NotifySuccess = () => toast.error("User Deleted succesfully !", {position: "bottom-center"}, { delay: 1000 }) ;

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
    const setFormations = (formations)=> {
        localStorage.setItem("formations", JSON.stringify(formations));
        console.log("formation", formations)
    }

    const setName = (nom) => {
        localStorage.setItem("nom", nom)
    }

    const setPrenom = (prenom) => {
        localStorage.setItem("prenom" , prenom)
    }

    const onClickLogin = ()=>{
        axios.post(`http://localhost:3333/users/signIn`,user) 
        .then((resp,res) => {
            if(resp.data.ERROR){
                setUser({
                    nom: "",
                    prenom: ""
                })
                //setErreur(resp.data.ERROR);
                setShowResults(true)
                Notify(resp.data.ERROR)
            } else{
                setToken(resp.data.token)
                if(!resp.data.role.localeCompare("user")){
                    //window.location = "/user";
                    setShowResults(false)
                    setFormations(resp.data.formationsPrticiper)
                    setName(resp.data.Nom)
                    setPrenom(resp.data.Prenom)
                    history.push("/user");
                    console.log("User") 
                } else{
                    //window.location = "/admin";
                    setShowResults(false)
                    history.push("/admin");
                    console.log("admin")
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
                            <h1 className="FormH1"> <strong>.. Connectez-vous pour obtenir votre certificat  .. </strong> </h1>
                            <div className="FormErreur">
                                { showResults ? <Results /> : null }
                            </div>
                            <label className="FormLabel" htmlFor="for">PRENOM</label>
                            <input className="FormInput" type="text" value={user.prenom} onChange={OnChangePrenom} placeholder="Prénom" required />
                            <label className="FormLabel" htmlFor="for">NOM</label>
                            <input className="FormInput" type="text" value={user.nom} onChange={OnChangeNom} placeholder="Nom" required />
                            <button className="FormButton" type="submit" onClick={onClickLogin}>Login</button>
                            <span className="Text"> Mot de passe oublié </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingIn