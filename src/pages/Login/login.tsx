import Input from "../../components/input/input"
import LoginButton from "../../components/buttonLogin/loginButton"
import './login.css'
import * as messages from './messages'

const LoginPage = () => {
    return (
 <div className="container">
    <div className="form_area">
        <p className="title">{messages.TITLE_LOGIN_PAGE}</p>
        <form action="">  
         <div className="form_group">   
           <Input placeholder={messages.PLACEHOLDER_USER}/>
           <Input placeholder={messages.PLACEHOLDER_PASSWORD}/>
           </div> 
            <div>
                <LoginButton label={messages.LABEL_BUTTON}/>
                <p>{messages.ACCOUNT} <a className="link" href="">{messages.SIGN_UP}</a></p><a className="link" href="">
            </a></div><a className="link" href="">
        
    </a></form></div><a className="link" href="">
</a></div>
    )
}

export default LoginPage