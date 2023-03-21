import { useState } from 'react';
function Juego() {

    const [Maquina, setMaquina] =useState("");
    const [Human, setHuman] =useState("");


    let options =['Piedra', 'Papel', 'Tijera']
    


    function ChangeMachine(){
      let Randommachine = Math.round(Math.random()*2);
      setMaquina(options[Randommachine]);
      usuarioganador()
    }


    function ChangeHuman(e){
      //console.log(e.target.innerText)
      setHuman(e.target.innerText)

      ChangeMachine()
    }

    function usuarioganador() {
      if (Human === Maquina) {
        alert("Empate");
      } else if (
        (Human === "Piedra" && Maquina === "Tijera") ||
        (Human === "Papel" && Maquina === "Piedra") ||
        (Human === "Tijera" && Maquina === "Papel")
      ) {
        alert("¡Le Ganaste a la maquina!");
      } else {
        alert("¡Gano la maquina,Perdiste!");
      }
    }
    


  return (
    <div className="App">
        <p>MAQUINA</p>
        <h1>{Maquina}</h1>
        <hr />
        <div>
            <p>HUMAN</p>
            <h1 style={{color:'orange'}}>{Human}</h1>
        </div>
        <div>
        <button onClick={ChangeHuman}>Piedra</button>
        <button onClick={ChangeHuman} className="btn">Papel</button>
        <button onClick={ChangeHuman}>Tijera</button>
        </div>
    </div>
   
  )
}

export default Juego