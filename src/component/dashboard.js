import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';



export function Dashboard()
{

    
//  let id = localStorage.getItem('id');
 const [userdetails,setUserdetails] = useState([]);

 useEffect(()=>{
     fetch('http://localhost:3000/Get_userdetails/')
     .then(responsive=>responsive.json())
     .then(json=>setUserdetails(json));
 },[]);
    return(
        <>

        <div className='container-fluid p-5'>
            <div className='container'>

            
            <div className='row'>
                <div className='col-lg-3'>
                    <label>select name</label>
                    <select>
                        {
                            userdetails.map((v,i)=>(
                                <option>{v.vendar_name}</option>
                            )
                            )
                        }
                    </select>
                </div>
                <div className='col-lg-3'>
                <label>Mobilenumber</label>

                </div>

            </div>
            </div>
            

        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2'>&nbsp;</div>
                <div className='col-lg-8'>
                    <div className='table-responsive mt-5'>
                        <table className=' table table-bordered'>
                        <thead>
                                <tr className='text-center text-primary'>
                                    <th>vendorName</th>
                                    <th>mobilenumber</th>
                                    <th>email</th>
                                    <th>pin</th>
                                    <th>Date and time</th>
                                                                    
                                </tr>
                            </thead>
                            <tbody>
                            {
                                userdetails.map((v,i)=>(
                                    <tr>
                                        <td>{v.vendar_name}</td>
                                        <td>{v.mobilenumber}</td>
                                        <td>{v.email}</td>
                                        <td>{v.pin}</td>
                                        <td>{v.date_and_time}</td>
                                    </tr>
                                ))
                            }
                           
                            </tbody>

                        </table>

                    </div>

                </div>
                <div className='col-lg-2'>&nbsp;</div>

            </div>

        </div>

        </>
    );
}