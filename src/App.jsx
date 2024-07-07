import LeftPanel from './layouts/LeftPanel/LeftPanel';
import "./base-style/reset-style.css"
import Body from './layouts/Body/Body';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import Header from './components/Header/Header';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const items =  JSON.parse(localStorage.getItem('data'));

    if (items.length) {
      setData(items.map(item => ({
        ...item,
        // date: new Date(item.data),
      })));
    }
  }, []);

  useEffect(() => {
    if(data.length)
      localStorage.setItem("data", JSON.stringify(data))
    console.log(data)
  }, [data])

  
  const addItem = item => {
    setData(oldData => [ ...oldData, {
      title: item.title,
      info: item.text,
      data: item.date,
      id: uuid(),
    }])
  }
  
  
  return (
    <>
      <Header />
      <div className="container">
        <LeftPanel data = {data} />
        <Body addItem={addItem} />
      </div>
    </>
  );
}

export default App;
