import {useState} from 'react'
import './account.css'

function LoginPage() {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    

    const handleForm =(e :React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!email || !password){
            console.log('please fill in all the values')
            return
        }
        else{
            const LoginUser = async () =>{
                const user = await fetch('http://localhost:8000/dj-rest-auth/login/',{
                    method : 'POST',
                    headers:{'content-type': 'application/json'},
                    body : JSON.stringify({
                        email : email,
                        password : password
                    })
                }).then(res => console.log(res.json())).catch(err=>console.log('an error occured',err))

                return user
            }

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
                 </div>
                <div className="m-3">
                    
                   <input type="password" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}/>
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
