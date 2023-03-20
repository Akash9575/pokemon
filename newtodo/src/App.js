import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';
import Edit from './components/Edit';

function App() {
  // test 2
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [current, setCurrent] = useState({});

  const newItem = (newValue) => {
    setData((oldvalue) => {
      return [
        {
          id: Math.random().toString(),
          title: newValue.title,
          des: newValue.des,
        },
        ...oldvalue,
      ];
    });
  };

  const onEdit = (editValue) => {
    // console.log(editValue)
    setIsEditing(true);
    setCurrent({ ...editValue });
    // console.log(current)
  };

  const onDelete = (DeletValue) => {
    setData((oldvalue) => {
      const removeData = oldvalue.filter((e) => e.id !== DeletValue);
      return removeData;
    });
  };

  const handleEditChnage = (e) => {
    setCurrent((oldvalue) => {
      return { ...oldvalue, [e.target.name]: e.target.value };
    });
  };

  const HandleEditSubmit = (e) => {
    e.preventDefault();

    if (current.title === '' || current.des === '') {
      alert('Title and Task can not be empty');
    } else {
      setIsEditing(false);

      // console.log(current)
      const updateData = data.map((e) => {
        return e.id === current.id ? current : e;
      });
      // console.log(updateData)
      setData(updateData);
    }
  };

  const cancleEdit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <Edit
          current={current}
          HandleEditSubmit={HandleEditSubmit}
          handleEditChnage={handleEditChnage}
          cancleEdit={cancleEdit}
        />
      ) : (
        <Form newItem={newItem} />
      )}

      <List data={data} delete={onDelete} edit={onEdit} />
    </>
  );
}

export default App;
