import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import {companyRegistration} from "../../util/api-call"
import AddLinkIcon from '@mui/icons-material/AddLink';
import styles from '../postJob/PostJob.module.css';
// import RegStyles from './RegisterCompany.module.css'
import {useNavigate} from 'react-router-dom';
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Typography,
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
} from '@mui/material'

const RegisterCompany=()=>{
  const navigate=useNavigate();
  const[compData, setcompData]=useState({
  companyName: '',
  headName: '',
  website: '',
  email: '',
  phone: '',
  orgSize: 0,
  orgType: '',
  desc: '',
  est_since: '',
  url:[]
 })
 const [file, setFile] = useState(null);
 const [flag, setFlag] = useState(false);
 const [filePreview, setFilePreview] = useState(null);
 const [inputFields, setInputFields] = useState([]); 
 const [addAlert, setaddAlert] = useState(false); 
 const [error, setError] = useState(false)
 const [duplicateUrl, setduplicateUrl] = useState(false)

const handleChange = (event) => {
  setcompData({ ...compData, [event.target.name]: event.target.value })
}

const handleImageChange = (event) => {
  setFile(event.target.files[0]);
  setFilePreview(URL.createObjectURL(event.target.files[0]))
  setFlag(true)
}

 const handleDropdownChange = (event, index) => {
   const newInputFields = [...inputFields];
   newInputFields[index].type = event.target.value;
   setInputFields(newInputFields);
 };

 const handleInputChange = (event, index) => {
   const newInputFields = [...inputFields];
   newInputFields[index].value = event.target.value;

   setInputFields(newInputFields);
 };

const handleDeleteBtn = (event, index)=>{
  setaddAlert(false);
  inputFields.splice(index, 1)
}

 const handleAddClick = () => {
   
     for(let i=0; i<inputFields.length; i++){
       if(inputFields[i].type==='' || inputFields[i].value===''){
         setaddAlert(true);
         return;
        }
        else{         
          setaddAlert(false);
      }
    }
   setInputFields([...inputFields, { type: "", value: "" }]);
 };


 const handleSubmit = async (event) => {
   event.preventDefault();
   setcompData({ 
     ...compData, 
     url: [...compData.url, ...inputFields] 
   });

   let check=false;
   for(let i=0; i<inputFields.length; i++){
    if(inputFields[i].type==='' || inputFields[i].value===''){
      check=true;
     }
     else {
      check = false;
     }
    }
    // const unique = Array.from(new Set(inputFields));

   if (
    compData.companyName ==='' ||
    compData.headName ==='' ||
    compData.website ==='' ||
    compData.email ==='' ||
    compData.phone ==='' ||
    compData.orgSize ==='' ||
    compData.orgType ==='' ||
    compData.desc ==='' ||
    compData.est_since ==='' ||
    check
  ) {
    console.log(addAlert)
    setError(true)
    return
  }

  // else  if (unique.length != inputFields.length){
  //  setduplicateUrl(prev=>!prev)
  //  return
  // }
  
else{
   const data = {
    companyname: compData.companyName,
    HeadName: compData.headName,
    Website: compData.website,
    Email:compData.email,
    Phone:compData.phone.toString(),
    Logo: file,
    OrganizationSize:compData.orgSize,
    OrganizationType: compData.orgType,
    Description:compData.desc,
    EstablishedSince:compData.est_since,
    url:compData.url 
  }

 
  const response = await companyRegistration(data)
  if (response === 200) {
    console.log("Ok")
  }
  console.log(response)
  navigate('/Successful_Submission');
}
}

return(
    <>
    <Header/>
    <Card className={styles.card}>
      <CardContent>
      <Typography
            variant='h4'
            className={styles.heading}
            style={{ marginBottom: '30px' }}
          >
            Register a Company
          </Typography>

    <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
      <div className={styles.row}>
        <TextField
         className={styles.input}
          id="cname"
          label="Company Name"
          value={compData.c_name}
          name='companyName'
          onChange={handleChange}
        />

        <TextField
         className={styles.input}
          id="ceo"
          label="CEO/Head"
          name='headName'
          value={compData.h_name}
          onChange={handleChange}
        
        />
      </div>
      <div className={styles.row}>
        <TextField
         className={styles.input}
          id="outlined-helperText"
          label="Website"
          name='website'
         value={compData.website}
         onChange={handleChange}
        />
      
        <TextField
         className={styles.input}
          id="outlined-helperText"
          label="Email"
          type="email"
          name='email'
          value={compData.email}
          onChange={handleChange}
        />
       </div>
       <div className={styles.row}>
        <TextField
         className={styles.input}
          id="outlined-helperText"
          label="Phone"
          name='phone'
          type="number"
         value={compData.phone}
         onChange={handleChange}
        />
        <TextField
         className={styles.input}
          id="outlined-helperText"
          label="Organization Size"   
          type="number"
          name='orgSize'
          value={compData.o_size}
          onChange={handleChange}
        />
        </div>
              
       <div>
        <TextField
        style={{width: "48.5%"}}
          id="outlined-number"
          label="Logo"
          type="file"
          name='Logo'
          onChange={handleImageChange}
          InputLabelProps={{
            shrink: true,
          }      
        }
          
        />
        <br/>
        <br/>
        {flag && <img className={styles.img} src={filePreview} alt='logo'/>}


        <div className={styles.row}>
               <TextField
               style={{marginBottom: "10px"  }}
         className={styles.input}
          id="outlined-helperText"
          label="Established since (e.g.,1996)"
          name='est_since'
         value={compData.est_since}
         onChange={handleChange}
        />
        <FormControl
                className={styles.formControl}
                style={{ width: '50%' }} 
              >
                <InputLabel htmlFor='orgType'>Organization Type</InputLabel>
                <Select
                  name='orgType'                 
                  value={compData.orgType}
                  onChange={handleChange}
                  inputProps = {{
                    name:'orgType',
                    id:'mode'
                  }}
                >
                  <MenuItem value='public'>Public</MenuItem>
                  <MenuItem value='private'>Private</MenuItem>
                  <MenuItem value='government'>Government</MenuItem>
                  <MenuItem value='self-employed'>Self-employed</MenuItem>
                </Select>
              </FormControl>
          </div>
                  </div>

                  <TextareaAutosize
              aria-label='AboutUs'
              placeholder='About us'
        
              name='desc'
              value={compData.desc}
              onChange={handleChange}
              style={{
                width: '100%',
                marginTop: '20px',
                fontSize: '16px',
                maxHeight: '80px',
                maxWidth: '100%',
                padding: '10px',
                border: '1px solid #ccc',
              }}/> 


        <Typography style={{ marginTop: '30px' }}><h3>Other Urls (e.g facebook, linkedin etc (optional))</h3> 
        <br/><button className={styles.newBtn} type="button" onClick={handleAddClick}>Add <AddLinkIcon /></button> </Typography> 
        

        <div >
        {
        inputFields.map((inputField, index) => (
    <div key={index} className={styles.row}> 
        <TextField
        type="text"
        name='value'
        value={inputField.value} 
        onChange={(event) => handleInputChange(event, index)}
        className={styles.input}
        id="outlined-helperText"
        label="url (e.g., www.facebook.com/xyz)"   
        />
          <FormControl
           className={styles.formControl}
           style={{ width: '50%' }}             
    >
  
      <InputLabel htmlFor='links'  style={{textAlign: "center", marginTop: "15px"}} >Social media</InputLabel>
      <Select
      style={{marginTop: "15px"}} 
        value={inputField.type} 
        onChange={(event) => handleDropdownChange(event, index)}
        name='type'      
      >
        <MenuItem value='fb'>facebook</MenuItem>
        <MenuItem value='insta'>Instagram</MenuItem>
        <MenuItem value='linkedin'>linkedin</MenuItem>
      </Select>
    </FormControl>
   
   <button id={styles.delBtn} className={styles.newBtn}  style={{marginTop: "5px"}}onClick={(event)=>handleDeleteBtn(event, index)}>X</button> 
    </div> 
  ))}
  </div>
    
  {addAlert && <p style={{color: 'red'}}>*Please fill above field first or delete it</p>}
  <div style={{textAlign: "right"}}><button type="submit" id={styles.submitbtn} className={styles.newBtn}>Submit</button></div>

     </form>
      {error && (
            <Typography
              variant='h6'
              style={{ color: 'red', marginTop: '20px', textAlign: 'center' }}
            >
              Please fill all the fields
            </Typography>
          )}
          </CardContent>
     </Card>
    </>
   )
  };
export default RegisterCompany