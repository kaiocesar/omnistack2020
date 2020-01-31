import React, { useEffect, useState } from 'react'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from './services/api'

function App() {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  async function handleAddDev(e) {
    e.preventDefault()

    const response = await api.post('/devs', {
      github_username, 
      techs,
      latitude,
      longitude
    })

    console.log(response)

  }

  return (
    <div className="App" id="app">
      <aside>
        <strong>Cadastrar</strong>  
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username} 
              onChange={e => setGithubUsername(e.target.value)} />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              value={techs} 
              onChange={e => setTechs(e.target.value)} />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)} />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude} 
                onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2325842?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Kaio Cesar</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO @kaiocesar. apaixonado por tecnologias</p>
            <a href="#">https://avatars2.githubusercontent.com/u/2325842?s=460&v=4</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2325842?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Kaio Cesar</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO @kaiocesar. apaixonado por tecnologias</p>
            <a href="#">https://avatars2.githubusercontent.com/u/2325842?s=460&v=4</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2325842?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Kaio Cesar</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO @kaiocesar. apaixonado por tecnologias</p>
            <a href="#">https://avatars2.githubusercontent.com/u/2325842?s=460&v=4</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2325842?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Kaio Cesar</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO @kaiocesar. apaixonado por tecnologias</p>
            <a href="#">https://avatars2.githubusercontent.com/u/2325842?s=460&v=4</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
