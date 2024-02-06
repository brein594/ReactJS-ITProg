import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1"
  /* компонент*/ 
  class App extends React.Component {
    constructor (props) {
      super(props)
      axios.get(baseUrl).then((res) => {
        console.log(res.data.data)
        this.setState({users: res.data.data})
      })


      this.state = {
          users: [
            /* 
            {
                  id:1,
                  firstname: 'Bob',
                  lastName: 'Marley',
                  bio: 'Lorem  FGHGFHFGH',
                  age: 40,
                  isHappy: true
              },
              {
                  id:2,
                  firstname: 'John',
                  lastName: 'Dore',
                  bio: 'Lorem  Fkjlljkljklj',
                  age: 22,
                  isHappy: false
              }
              */
          ]
      }
      
      this.addUser = this.addUser.bind(this)
      this.deleteUser = this.deleteUser.bind(this)
      this.editUser = this.editUser.bind(this)
    }

  render () {
    return (<div>
    <Header title="Список пользователей"/>
    <main>
      <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
    </main>
    <aside>
      <AddUser onAdd={this.addUser} />
    </aside>
    </div>)
  }
  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })

  }

  editUser(user){
    let allUsers = this.state.users 
    allUsers[user.id - 1] = user
    this.setState({users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user) {
    const id = this.state.users.lenght +1
    this.setState({ users: [...this.state.users, {id, ...user}]})
    
  }


}

export default App