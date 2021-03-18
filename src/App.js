
import './App.scss';

function App() {
  return (
    <div className="App">
        <div className="cardApp right1">

            <input className="input" type="text" name="email"/>
            <input className="input" type="text" name="password"/>
            <div className="boton">Login</div>

        </div>
        <div className="cardApp cardApp2 left1">
            <span>Si no estás registrado aún, click aqui!</span>
            <div className="boton">Login</div>
         </div>
         <div className="cardApp left1">
          <div className="boton">Login</div>
         </div>
    </div>
  );
}

export default App;
