import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaborador';
import Footer from './componentes/Footer';


function App() {
  const[mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] =useState([{
    id:uuid(),
    equipo:"Front End",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"jUan",
    puesto:"instructor",
    fav: true
  },
  {
    id:uuid(),
    equipo:"Programación",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"jkarol",
    puesto:"gerente",
    fav: false
  },
  {
    id:uuid(),
    equipo:"UX y Diseño",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"sebas",
    puesto:"contador",
    fav:false
  },
  {
    id:uuid(),
    equipo:"Programación",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"pepe",
    puesto:"colaborador",
    fav:false
  }





])

  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario:"#82cffa",
      colorSecundario:"#e8f8ff"
    },
    {
      id: uuid(),
      titulo:  "Data Science",
      colorPrimario:"#a6d157",
      colorSecundario:"#f0f8e2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario:"#e06b69",
      colorSecundario:"#fde7e8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario:"#db6ebf",
      colorSecundario:"#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario:"#ffba05",
      colorSecundario:"#fff5d9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario:"#ff8a29",
      colorSecundario:"#ffeedf"
    }
 
])



  //Ternario--> condicion ? seMuestra  : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

const registrarColaborador = (colaborador) =>{
  console.log("Nuevo colaborador", colaborador);
  //spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

 // Eliminar colaborador

 const eliminarColaborador= (id) =>{
  console.log("Eliminar colaborador", id);
  const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores);
}


  //Actualizar color de equipo

  const actulizarColor = (color, id)=> {
    console.log("Actualizar:", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  const like = (id) => {
    console.log("like", id)
    const coloboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(coloboradoresActualizados)
  }

  return (
    <div >
    <Header />

    {/*mostrarFormulario ?  <Formulario /> : <></>*/}

    {
    mostrarFormulario && <Formulario 
    equipos={equipos.map((equipo)=>equipo.titulo)} 
    registrarColaborador={registrarColaborador}
    crearEquipo={crearEquipo}
    
    /> 
    }
   
    <MiOrg cambiarMostrar={cambiarMostrar} />
  
   {
    equipos.map((equipo)=> <Equipo 
    datos={equipo} 
    key={equipo.titulo} 
    colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
    eliminarColaborador={eliminarColaborador}
    actulizarColor={actulizarColor}
    like={like}
      />
    )
   }

  <Footer />
   

    </div>
  );
}

export default App;
