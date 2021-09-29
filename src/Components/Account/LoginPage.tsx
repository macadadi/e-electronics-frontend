import {useState} from 'react'
import './account.css'


function LoginPage() {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [emailError,setEmailError] = useState('')
    const [passwordError,setPasswordError]=useState('')

    const handleForm =(e :React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!email && !password){
            setEmailError('This field can not be blank')
            setPasswordError('This field can not be blank')
            return
        }
        else if(!email){
            setEmailError('This field can not be blank')
            setPasswordError('')
            return
        }
        else if(!password){
            setPasswordError('This field can not be blank')
            setEmailError('')
            return
        }
        else{
            const LoginUser = async () =>{
                const user = await fetch('http://localhost:8000/dj-rest-auth/user/',{
                    method : 'GET',
                    headers:{
                        'Authorization': 'Bearer '+`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMyOTE3OTUwLCJqdGkiOiI5MmZhYzdmMzBjMGE0MTAyODcyOTVkMDNhYmMwODZlMSIsInVzZXJfaWQiOjI1fQ.yMj9dKRbn_GKrCYva2pNaNr-l269Gc6DStQcGD42XwA`,
                        'content-type': 'application/json'},
                    
                }).then(res => console.log(res.json())).catch(err=>console.log('an error occured',err))

                return user
            }
            setPasswordError('')
            setEmailError('')
            LoginUser()
        }

    }
    return (
        <div>
           
            <div className=" d-flex align-items-center m-4">
                <form onSubmit={handleForm} className="login-form  m-auto col-md-6 col-sm-8 col-12">
                <h3>Please login</h3>
                <div className="m-3"> 
                    <input type="email" placeholder='Enter your email' onChange={e=>setEmail(e.target.value)}/>
                    <div>
                        <h6 style={{color:'red'}}>{emailError && emailError}</h6>
                        </div>
                 </div>
                <div className="m-3">
                    
                   <input type="password" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}/>
                   <div>
                        <h6 style={{color:'red'}}>{passwordError && passwordError}</h6>
                        </div>
                </div>
                <div className="m-3">
                <button type="submit" >Login</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
