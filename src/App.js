import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Person from './components/Person';
import { getList, remove } from './services/people';

function App() {
  const [people, setPeople] = useState([])
  const [personUpdate, setPersonUpdate] = useState(null)

  const handleClickDelete = async (id) => {
    await remove(id)
    getPeople()
  }
  const handleClickEdit = (data) => {
    setPersonUpdate(data)
  }

  const getPeople = async () => {
    const data = await getList()
    setPeople(data)
  }

  useEffect(() => {
    if (people) {
      getPeople()
    }
  }, [])
  return (
    <div className="container">
      <div className="row my-3">
        <h3><i className="bi bi-server"></i> Gestión de personal universitario</h3>
      </div>
      <div className='row mb-3'>
        <Form personUpdate={personUpdate} setPersonUpdate={setPersonUpdate} getPeople={getPeople}/>
      </div>
      <hr className='border border-dark my-4' />
      <div className='row mb-3'>
        <h4><i className="bi bi-person-lines-fill"></i> Listado de personas</h4>
      </div>
      <div className='row'>
        {
          people.map(person => (
            <div key={person.id} className='col-md-4'>
              <Person
                data={person}
                handleClickEdit={() => handleClickEdit(person)}
                handleClickDelete={() => handleClickDelete(person.id)}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
