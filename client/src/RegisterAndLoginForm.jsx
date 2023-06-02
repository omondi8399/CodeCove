import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('register')
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext)
    async function handleSubmit(e) {
        e.preventDefault()        
        const url = isLoginOrRegister === 'register' ? 'register' : 'login'
        const {data} = await axios.post(url, {username,password})
        setLoggedInUsername(username)
        setId(data.id)
    }
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border"
                value={username} onChange={e => {setUsername(e.target.value)}}/>
                <input type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" 
                value={password} onChange={e => {setPassword(e.target.value)}}/>
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
                </button>
                <div className="text-center mt-2">
                    {isLoginOrRegister === 'register' && (
                        <div>
                            Already a member ? <button onClick={() => setIsLoginOrRegister('login')}> Login here</button>
                        </div>
                    )}
                    {isLoginOrRegister ==='login' && (
                        <div>
                        Don't have an account ? <button onClick={() => setIsLoginOrRegister('register')}>Register</button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}