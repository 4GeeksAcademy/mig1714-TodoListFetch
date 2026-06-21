import { useState } from "react";

import "../../styles/index.css";


const TodoList = () => {

    const [tareas, setTareas] = useState([]);

    const [texto, setTexto] = useState("");

    const [indexActivo, setIndex] = useState(null);


    const eliminarTareas = (indexEliminar) => {


        setTareas(

            tareas.filter((value, index) => index !== indexEliminar)

        );
    }








    return (





        <div className="container  d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>

            <div className="d-flex todo-list border flex-column " style={{ minHeight: "200px", width: "700px" }} >

                <h1>TodoList</h1>

                <div className="d-flex ">

                    <label htmlFor="tarea"></label>
                    <input type="text" name="tarea" placeholder="QUE VAS HACER?" value={texto} onChange={(evento) => { setTexto(evento.target.value) }} onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            setTareas([...tareas, texto]);

                            setTexto("");

                        }


                    }


                    } />


                </div>

                <p>{texto}</p>


                


                {tareas.map((value, index) => {

                    return <div

                        key={index}

                        className={`tarea d-flex justify-content-between ${indexActivo === index ? "hover" : "" }`}

                        
                        
                

                        onMouseEnter={() => {
                            setIndex(index);
                        }}

                        onMouseLeave={() => {

                            setIndex(null);
                        }}

                        



                    >{value}

                        {indexActivo === index ? <button
                            onClick={() => {

                                eliminarTareas(index);
                            }}

                        >X</button> : null}
                        

                        
                    </div>



                    
                })}
                <div className="pendientes">{tareas.length} tareas pendientes</div>




            </div>


            













        </div>



        













    )

    
}



export default TodoList;