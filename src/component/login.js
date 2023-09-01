import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './regiester.css';
 import axios from 'axios';
 import {Link} from 'react-router-dom';

 export function Login()
 {   

    const handlelogin=(event)=>{
       event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        axios.post("http://localhost:3000/Logedin",datastring,config)
       .then(function(response){
        if(response.data.status === 'error')
        {
            alert('error');
        }
        else if(response.data.status === 'loged')
        {
            let id = response.data.id;
            localStorage.setItem("id",id);
            alert('Logined');
            window.location.href="./dashboard";
        }
        else if(response.data.status === 'Invalid'){
            alert('Invalid mobilenumber and pin');
            window.location.href="./login";
        } 
        else{
            alert('Contact Admin');
            window.location.href="./login";
        }
       })
       
       .catch(function(error){
        alert('Error');
        window.location.href="./login";
    })
    // alert('hhhh');
    }
     

    return(
    <>
       <div className='container-fluid sign1'>
       <div className="container ">
            <div className="row">
            <div className="col-lg-3">&nbsp;</div>
            <div className="col-lg-6 mt-5">
              <form  onSubmit={handlelogin}>
                <div className="table-responsive mt-5">
                    <table className="table table-bordered mt-5">
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-center "> Spark Login Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'><label>Mobilenumber</label></td>
                                <td>
                                    <input type="number" name="mobilenumber" id="mobilenumber" className="form-control"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center'><label>pin</label></td>
                                <td>
                                    <input type="password" name="pin" id="pin" className="form-control"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                   <button type="submit" name="data_submit" id="data_submit"
                                    value="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div>
                </form>
            </div>
            <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
        </div>      
    </>
    )
 }