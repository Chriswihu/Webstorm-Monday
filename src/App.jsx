import {useEffect, useState} from 'react'
import './styles/App.css'
import Adress from './components/adress.jsx'
import Personlist from './components/personlist.jsx'
import Counter from "./components/counter.jsx";

function App() {

    const persons = [
        {id: 0, name: "Chris", age: 30},
        {id: 1, name: "Morten", age: 40},
        {id: 2, name: "Lars", age: 50},
        {id: 3, name: "Peter", age: 60}
    ]

    // const name = "Chris"

    const address = {
        city: "Lyngby",
        street: "Byvej",
        strnr: "32"
    }

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect called")
        // setCount(1)
    }, [])
    return (
        <div style={background}>
            <p>This is a paragraph</p>
            <Personlist persons={persons}/>
            {/*<Adress addr={address}/>*/}
            {/*<Person name={name} title="This is a Title"/>*/}
            {/*<Adress city = "Lyngby" street = "Byvej" strnr = "32"/>*/}

            <Counter/>

        </div>
    )
}

const background = {
    backgroundColor: 'lightblue',
}

export default App
