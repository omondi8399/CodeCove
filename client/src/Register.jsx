import axios from "axios"
import { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    async function register(e) {
        e.preventDefault()
        await axios.post('/register', {username,password})
    }
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={register}>
                <input type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border"
                value={username} onChange={e => {setUsername(e.target.value)}}/>
                <input type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" 
                value={password} onChange={e => {setPassword(e.target.value)}}/>
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
            </form>
        </div>
    )
}