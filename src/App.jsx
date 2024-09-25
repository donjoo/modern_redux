import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useAppDispatch,useAppSelector} from './app/hooks';
import {incremented,amountAdded} from './features/counter/counter-slice';
import './App.css'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';

function App() {
  
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs,setNumDogs] = useState(10);
  const { data=[], isFetching } = useFetchBreedsQuery(numDogs); 

  function  handleClick() {
      dispatch(amountAdded(4));
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button  onClick={handleClick}>
          count is {count}
        </button>
        <p>


          <div>
            <p>dogs to fetch:</p>
            <select value={numDogs} onChange={(e)=> setNumDogs(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>

            </select>
          </div>
          <div>
            <p>number of of dogs fetched: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((breed) => (
                    <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250}></img>
                  </td>
                  </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
