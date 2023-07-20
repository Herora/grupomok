import React, { useEffect, useState } from 'react';
import './../assets/css/table.css';
import { TableData } from '../providers/tableData';

function Table() {
    const [dataOrigin, setDataOrigin]: any = useState();
    const data = async () => {
        let getData: any = await TableData();
        if (getData) {
            setDataOrigin(getData.results);
        }
    }
    useEffect(() => {
        data()
    }, [])
    const prueba = () => {
        console.log(dataOrigin);

    }
    return (
        <div>
            <h1>Lista de usuarios</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Genero</th>
                            <th>Pais</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataOrigin ? ( 
                            dataOrigin.map((item:any,i:number) => 
                            <tr key={i}>
                                    <td><img src={item.picture.thumbnail} alt=""/></td>
                                    <td>{item.name.first}</td>
                                    <td>{item.name.last}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.location.country}</td>
                                    <td>button</td>
                                </tr>
                        )
                        ) : null}
                    </tbody>
                </table>
            </div>
            <button onClick={prueba}>asdasdas</button>
        </div>
    );
}

export default Table;