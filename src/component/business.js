import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './regiester.css';
 import axios from 'axios';


export function Business()
{

    const [busdetails,setBusdetails] = useState([]);

 useEffect(()=>{
     fetch('http://localhost:3000/Viewbusiness/')
     .then(responsive=>responsive.json())
     .then(json=>setBusdetails(json));
 },[]);
    return(
        <>

        <div>
            <select></select>
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
                                        <td>{v.vendor_name}</td>
                                        <td>{v.business_name}</td>
                                        
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