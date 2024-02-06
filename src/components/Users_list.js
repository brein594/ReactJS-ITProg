import React from "react"


class Users extends React.Component {
   /*массив данных. Объект. Работа со списками*/
    users = [
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

    ]
    render () {
        /*условие вывода */
     if (this.users.length > 0)
       return (<div>
            {this.users.map((el) => (<div className="user" key={el.id}>
                <h3>{el.firstname} {el.lastName}</h3>
                <p>{el.bio}</p>
                <b>{el.isHappy  ? 'Cчастлив :)' : 'не особо счастлив :(' }</b>
                </div>))}
       </div>)
     else 
     return ( <div className="user">
      <h3>Пользователей нет</h3>
     </div>)
     
     }
}

export default Users