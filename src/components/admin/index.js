import React,{ useState, useEffect} from 'react' ;
import axios from 'axios';
import './admin.css' ;
import NavBar from './navAdmin';
import { Button } from 'react-bootstrap';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


toast.configure();
const Admin = () => {

    let data = new FormData();
    let [formationsName, setFormationsName] = useState([])
    let [formationSelected, setFormationSelected] = useState() 
    let [user, setUser] = useState([]) ;
    let [search, setSearch] = useState("") ;
    let classes = useStyles();
    // let [participantsByFormation, setParticipantsByFormation] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [erreur, setErreur] = useState("")
    // const [showToast, setShowToast] = useState(false)

    useEffect(()=>{
      axios.get('http://localhost:3333/participants/findFormations') 
      .then(resp =>{
          setFormationsName(resp.data);
      }).catch(err =>{
          alert("Try Again !!");          
      })
  }, [])

    // la declaration de la fonction : getUser()

    const getUserData = async () => {
        try {
          axios.get("http://localhost:3333/participants/findByFormation/JS")
          .then(resp => {
            console.log("the response is " + resp.data);
            setUser(resp.data) ;
          })
          
        }catch(err) {
            console.log(err) ;
        }
    }

    // the useEffect of get users : 

    useEffect(() => {
      getUserData() ;
    },[])

    const onClickSend = () => {
      const token = localStorage.getItem("token")
      console.log("token ",token)
      axios.interceptors.request.use(
          config => {
              config.headers.authorization = `Bearer ${token}`;
              return config;
          },
          erreur => {
              return Promise.reject(erreur)
      })

      axios.post("http://localhost:3333/participants/add", data) 
        .then(resp =>{
            console.log(resp);
            if(resp.data.ERROR){
              setErreur(resp.data.ERROR);
              setShowResults(true)
          } else
              Notify(resp.data.MESSAGE);
              setShowResults(false)   
        }).catch(err =>{
                alert("try again !");          
        })
    }

    const changeFormationName = (e) =>{
        data.set("formationName", e.target.value)
    }
    const changeFiles = (e)=> {
        data.append("file", e.target.files[0])
    }
    const changeImg = (e)=> {
        data.append("file", e.target.files[0]);
    }


    const onChangeFormationSelected = async (e) =>{
      formationSelected = e.target.value;
      const data = await axios.get(`http://localhost:3333/participants/findByFormation/${formationSelected}`);
      user = data.data;
      setUser(user)
    } 


    // delete use : 

    const onClickDelete = (id, index) => {
      user.splice(index, 1)
      setUser([...user,
          user
      ]);
      axios.delete(`http://localhost:3333/participants/delete/${id}`) 
      .then(resp =>{
        setUser(user);
        NotifySuccess()
      }).catch(err =>{
              alert("try again");          
      })
    }

    const Results = () => (
            <>
                {erreur}
            </>
        )

    const Notify = (message) => toast.success(message, {position: "bottom-center"}); // to seee
    const NotifySuccess = () => toast.success("User Deleted succesfully !", {position: "bottom-center"}, { delay: 1000 }) ;

    return(
      <>
        <NavBar />
        <div className="Container">
                <div className="FormWrap">                     
                    <div className="FormContent">
                        <div className="Form">
                        <div className="FormErreur">
                            { showResults ? <Results /> : null }  
                        </div>
                        <ToastContainer /> 
                            <label className="FormLabel" htmlFor="for">FORMATION : </label>
                            <input className="FormInput" type="text" onChange={changeFormationName} placeholder="FORMATION" required />
                            <label className="FormLabel" htmlFor="for"> EXEL FILE : </label>
                            <input className="FormInput" id="filee" type="file" onChange={changeFiles} placeholder="EXCEL FILE" accept=".xlsx" required />
                            <label className="FormLabel" htmlFor="for"> CERTIFICAT IMAGE : </label>
                            <input className="FormInput" id="filee" type="file" onChange={changeImg} placeholder="CERTIFICAT IMAGE" accept=".jpg" required />
                            <button className="FormButton" type="submit" onClick={onClickSend}> SEND </button>
                        </div>
                    </div> 


                    <select className="optionS" value={formationSelected} onChange={onChangeFormationSelected}>
                        { formationsName.map( 
                          (formation) =>{
                            return (
                              <option value={formation} key={formation}> {formation} </option>     
                            )
                          })
                        } 
                    </select>
                        <input 
                        className="FormInput" id="fileeN"
                        type="text" 
                          placeholder="Search BY NOM !"
                          onChange={e => {
                            setSearch(e.target.value) ;
                          }}
                        />
          
                          
                        <TableContainer className="lahcen" component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell> NOM  </StyledTableCell>
                                  <StyledTableCell> PRENOM </StyledTableCell>
                                  <StyledTableCell> EMAIL </StyledTableCell>
                                  <StyledTableCell> ADRESSE </StyledTableCell>
                                  <StyledTableCell> DELETE </StyledTableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
   
                        {user.filter(item  => {
                          if(search == "") {
                            return item 
                          }
                          else if(item.nom.toLowerCase().includes(search.toLowerCase())){
                              return item ; 
                          }
                        }).
                        map((item, index) => {
                          return (
                          <StyledTableRow key= {item.id} >
                          <StyledTableCell component="th" scope="row">
                            {item.nom}
                          </StyledTableCell>
                          <StyledTableCell>{item.prenom}</StyledTableCell>
                          <StyledTableCell>{item.email} </StyledTableCell>
                          <StyledTableCell>{item.adresse}</StyledTableCell>
                          <StyledTableCell><Button className="danger" onClick={()=> onClickDelete(item._id, index)}> DELETE </Button>{' '}</StyledTableCell>
                        </StyledTableRow>
                        )
                        })} 
        </TableBody>
      </Table>
    </TableContainer>
                </div>   
             
        </div>
      </>
    )
}

export default Admin;
