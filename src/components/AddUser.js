import React from "react"


class AddUser extends React.Component {
   userAdd = {}
    constructor(props) {
    super(props)
    this.state = {
        first_name: "",
        last_name: "",
        email: "",
        age: 1,
        isHappy: false
    }
    
}
    
    render () {
     return (
        /* ref обновляет страницу  */
       <form ref={(el) => this.myForm = el}>
        <input placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value })}></input>
        <input placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value })}></input>
        <textarea placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value })}></textarea>
        <input placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value })}></input>
        <label htmlFor="isHappy">Счастлив?</label>
        <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked })}></input>
        <button type="button" onClick={() => {
            this.myForm.reset()
            this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                age: this.state.age,
                isHappy: this.state.isHappy
            }
            if(this.props.user)
                this.userAdd.id = this.props.user.id
            this.props.onAdd(this.userAdd)
        }
        }>Добавить</button>
        </form>
     )
     }
}

export default AddUser