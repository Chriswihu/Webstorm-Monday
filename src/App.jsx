import {useState, useEffect} from 'react'
import './styles/App.css'
import Address from "./components/Address.jsx";
import Userlist from "./components/UserList.jsx";
import Counter from "./components/Counter.jsx";
import UseRef from "./components/UseRef.jsx";
import UseRefPreState from "./components/UseRefPreState.jsx";

function App() {
    // const persons = [
    //     {id: 0, name: "Chris", age: 30},
    //     {id: 1, name: "Morten", age: 40},
    //     {id: 2, name: "Lars", age: 50},
    //     {id: 3, name: "Peter", age: 60}
    // ]

    const address = {
        city: "Lyngby",
        zipCode: 2800,
        address: "Lyngby Hovedgade"
    }


    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     console.log("useEffect called");
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, []);

    console.log("Hello from outside the return!")

    return (
        <div>
            {console.log("Hallo from inside the return!")}
            {/*Hallo from {name}!*/}
            {/*<p>This is a paragraph</p>*/}
            {/*<Userlist users={users}/>*/}
            {/*<Address addr={address}/>*/}
            {/*<Counter count={count} setCount={setCount}/>*/}
            {/*<UseRef/>*/}
            <UseRefPreState/>
        </div>
    )
}

export default App

//
//
//     // const name = "Chris"
//
//     const address = {
//         city: "Lyngby",
//         street: "Byvej",
//         strnr: "32"
//     }
//
//     const [count, setCount] = useState(0);
//     const {users, setUsers} = useState([]);
//
//     useEffect(() => {
//         console.log("useEffect called")
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(res => res.json())
//             .then(data => setUsers(data))
//     }, [])
//
//     console.log(users)
//
//     return (
//         <div style={background}>
//             <p>This is a paragraph</p>
//             <Userlist users={users}/>
//             {/*<address addr={address}/>*/}
//             {/*<counter count={count} setCount={setCount}/>*/}
//
//             {/*<Personlist persons={persons}/>*/}
//             {/*<Address addr={address}/>*/}
//             {/*<Person name={name} title="This is a Title"/>*/}
//             {/*<Address city = "Lyngby" street = "Byvej" strnr = "32"/>*/}
//
//             {/*<Counter/>*/}
//
//         </div>
//     )
// }
//
// const background = {
//     backgroundColor: 'lightblue',
// }
//
// export default App
