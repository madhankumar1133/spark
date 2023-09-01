import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './regiester.css';
 import axios from 'axios';
export function  Regiester()
{  
    const handledetails=(event)=>{
        event.preventDefault();
      var datastring=new FormData(event.target);
      var config={headers:{"enctype":"multipart/form-data"}};

      axios.post('http://localhost:3000/Add_data',datastring,config)
      .then(function(response){
        if(response.data.status === 'error'){
            alert('error');
            
        }
        else if(response.data.status === 'Registered'){
            alert('Successfully Registered');
             window.location.href="/login";
        }
        else{
            alert('Contact Admin');
            
        }
    })
    .catch(function(error){
        alert('Error');
        
    })
  }
        // alert('hdjnbdsj')
    


    return(
        <>
        <div className='container-fluid Regiesterform'>
            <div className='row'>
              <div className='col-lg-3'>&nbsp;</div>
              <div className='col-lg-6'>
                <form onSubmit={handledetails}>
                  <div className='table-responsive mt-4'>
                    <table className=' table table-bordered'>
                      <thead>
                        <tr>
                          <th colSpan={2} className='text-center'> Spark Regiestration Form</th>
                        </tr>
                      </thead>
                      <tbody className='text-center'>
                        <tr>
                          <td><label>Vendorname</label></td>
                          <td><input type='text' name='vendar_name' id='vendar_name' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Mobilenumber</label></td>
                          <td><input type='number' name='mobilenumber' id='mobilenumber' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Email</label></td>
                          <td><input type='email' name='email' id='email' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Password</label></td>
                          <td><input type='password' name='pin' id='pin' className='form-control'/></td>
                        </tr>
                       <tr>
                        <td>
                            <button  type="submit" className=' btn btn-primary'  value="submit" >submit</button>
                           
                        </td>
                       </tr>
                       
                      
                      </tbody>


                    </table>

                  </div>
                </form>
                

              </div>
              <div className='col-lg-3'>&nbsp;</div>

            </div>
            
          </div>
        </>
    );
}