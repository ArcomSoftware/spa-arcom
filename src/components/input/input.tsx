import './input.css'
const Input = ({placeholder}:{placeholder: string}) => {
    return(
    <div className="input-container">
    <input
      className="input"
      name="text"
      type="text"
      placeholder={placeholder}
    />
  </div>)
  
}

export default Input