import axios from "axios"
import { useState } from "react"
import "./Login.css"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return <div className="background" >
        <div className="log_in">
            <h1 className="logo">SNC留言板</h1>

            <h2>欢迎登录</h2>
            <br></br>
            <input type="text" placeholder="email" className="userInput" value={email} onChange={(e) => setEmail(e.target.value)} />  {/*这里怎么连接数据库看看与没有注册账号*/}
            <input type="password" placeholder="密码" className="userInput" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="button" className="clickButton" value="登录" onClick={() => axios.post("/api/user/login", { email, password })} />
            <input type="button" className="clickButton" value="注册" onClick={() => axios.post("/api/user/registry", { email, password })} />
        </div>
    </div>
}

export default Login