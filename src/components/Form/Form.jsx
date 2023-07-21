// import React, { Component } from "react";
// class Form extends Component {
//   state = {
//     name: '',
//     tag:'',
//   }

//   handleChange = (event) => {
//     // const { name, value } = event.currentTarget;
  
//     // console.log(event.currentTarget)
//     // console.log(event.currentTarget.name)
//     // console.log(event.currentTarget.value)
//     // this.setState({
//     //   [name]: value,
//     // })
    
//   }

//    handleSubmit = (event) => {
//      event.preventDefault();
//      this.props.onSubmit(this.state);
//      this.reset();

//   }

//   reset = () => {
//   this.setState({  name: ''})
//   }
//   render() {
  
  
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label > Name
//             <input type="text" value={this.state.name}
//               name="name"
//               onChange={this.handleChange} /></label>
//           <label > Tag
//             <input type="text"
//               name="tag" value={this.state.tag} onChange={this.handleChange} /></label>
//           <button type="submit"> Submit</button>
//           </form>
        
//       </>
//     );
//   }
// }

// export default Form;