import React ,{useState} from "react";
// const Form = () => {
//     const[userName,setUserName] = useState("")
//     const submitButtonClick = (e) => {
//         e.preventDefault();
//         console.log("Submit button is clicked")
//     }
// return (
//     <div>
//         <form onSubmit={submitButtonClick}>
//             <label for='userName'>UserName</label>
//             <input id='userName' type="text" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            
//             <button type="submit">Submit</button>
//         </form>
//     </div>
// )
// }
// export default Form;

const Form = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Form;