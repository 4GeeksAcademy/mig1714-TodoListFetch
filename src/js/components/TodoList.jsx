import { useEffect, useState } from "react";

import "../../styles/index.css";

const URL_BASE = "https://playground.4geeks.com/todo";





const TodoList = () => {

    const [tareas, setTareas] = useState([]);

    const [texto, setTexto] = useState("");

    const [indexActivo, setIndex] = useState(null);

    const [mensaje, setMensaje] = useState('');


    const cargarTareas = async () => {
        try {

            const response = await fetch(`${URL_BASE}/users/Jorge1`);
            if (response.status === 404) {

                setMensaje('Usuario no encontrado!');
            }

            const data = await response.json();

            setTareas(data.todos);





        } catch (error) {

            console.log(error);

        }




    }


    const agregarTarea = async () => {
        try {


            const response = await fetch(`${URL_BASE}/todos/Jorge1`, {


                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    "label": texto,
                    "is_done": false
                })






            });

            const data = response.json();



            cargarTareas();



        } catch (error) {

            console.log(error);

        }







    }
    const eliminarTareas = async (id) => {


        try {

            const response = await fetch(`${URL_BASE}/todos/${id}`, {
                method: "DELETE"

            });


            cargarTareas();

        } catch (error) {

            console.log(error);

        }
    }




    useEffect(() => {

        cargarTareas();




    }, []);






    return (





        <div className="container  d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>

            <div className="d-flex todo-list border flex-column " style={{ minHeight: "200px", width: "700px" }} >

                <h1>TodoList</h1>
                <h1>{mensaje}</h1>

                <div className="d-flex ">

                    <label htmlFor="tarea"></label>
                    <input type="text" name="tarea" placeholder="QUE VAS HACER?" value={texto} onChange={(evento) => { setTexto(evento.target.value) }} onKeyDown={(event) => {
                        if (event.key === 'Enter') {

                            agregarTarea();

                            setTexto("");

                        }


                    }


                    } />


                </div>

                <p>{texto}</p>





                {tareas?.map((value, index) => {

                    return <div

                        key={index}

                        className={`tarea d-flex justify-content-between ${indexActivo === index ? "hover" : ""}`}





                        onMouseEnter={() => {
                            setIndex(index);
                        }}

                        onMouseLeave={() => {

                            setIndex(null);
                        }}





                    >{value?.label}

                        {indexActivo === index ? <button
                            onClick={() => {

                                eliminarTareas(value.id);
                            }}

                        >X</button> : null}



                    </div>




                })}
                <div className="pendientes">{tareas?.length} tareas pendientes</div>




            </div>
















        </div>

















    )


}



export default TodoList;