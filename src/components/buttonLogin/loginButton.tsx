
import './loginButton.css'

export interface IProps {
    
}

const LoginButton = ({label}:{label:string}, {onClick}:{onClick?: () => unknown}) => {
    return<button onClick={onClick}>{label}</button>
}


export default LoginButton