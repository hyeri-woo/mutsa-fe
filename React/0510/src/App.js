// import './App.css';
import {useState} from 'react'
import MyList from './components/MyList.jsx'
import Counter from './components/Counter.jsx'
import NavBar from './components/NavBar.jsx'
import EventForm from './components/EventForm.jsx'
import ItemGenerator from './components/ItemGenerator.jsx'

function App() {
  const [datas, setData] = useState([]);
  const addData = (data) => {
    setData([...datas, data]);
  }
  console.log(datas);
  return (
    <div>
      <MyList/>
      <Counter/>
      <NavBar/>
      <EventForm addData={addData}/>
      <ItemGenerator data={datas}/>
    </div>
  );
}

export default App;