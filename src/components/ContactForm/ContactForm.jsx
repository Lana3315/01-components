import React, { Component } from 'react'
class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',

  }


 
   handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    })
    
  }

   handleSubmit = e => {
    e.preventDefault();

    const { addContact } = this.props;

    addContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };

    reset = () => {
  this.setState({  name: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label >Name
          <input
  value={this.state.name}
  name="name"
  type="text"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
/>
        </label>
          {/* <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number"
            value={number}
            onChange={this.handleChange}
          />
        </label> */}
        <button type="submit"> Add Contact</button>
       
      </form>
    )
    
  }
}
export default ContactForm;