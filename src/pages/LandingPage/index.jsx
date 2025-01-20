import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value)
        localStorage.setItem('username', value);
    }

    const handleSubmit = () => {
        if (username != '') {
            localStorage.setItem('clientID', Date.now())
            navigate('/Chat')
        }
    }


    return (
        <div className="min-h-screen w-full bg-blue-600 flex justify-center items-center">
            <div>
                <label htmlFor="username" className="block text-white font-bold text-lg">Username:</label>
                <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} className="rounded-md w-[350px] p-2 focus:outline outline-black-500" />
                <button onClick={handleSubmit} className="block rounded-md bg-blue-500 hover:bg-blue-700 transition-all duration-150 ease text-white p-3 mt-2">Submit</button>
            </div>
        </div>
    )
}

export default LandingPage
