import React, { useEffect, useState } from 'react';
import './../assets/css/table.css';
import { TableData } from '../providers/tableData';

function Table() {
    const [dataOrigin, setDataOrigin]: any = useState();
    const [changeColor, setChangeColor]: any = useState(false);
    const data = async () => {
        let getData: any = await TableData();
        if (getData) {
            setDataOrigin(getData.results);
        }
    }
    useEffect(() => {
        data()
    }, [])
    const chageColorTable = () => {
        setChangeColor(!changeColor)
    }
    return (
        <div>
            <h1 className='text-center text-[50px] mb-[50px]'>Lista de usuarios</h1>
            <div className='flex justify-center mb-[30px] '>
                <button className="mr-[20px] py-[5px] px-[20px] bg-[#2d3585] text-white rounded-full p" onClick={chageColorTable}>Colorear</button>
                <button className="mr-[20px] py-[5px] px-[20px] bg-[#2d3585] text-white rounded-full ">Orden por País</button>
                <button className="mr-[20px] py-[5px] px-[20px] bg-[#2d3585] text-white rounded-full ">Restaurar</button>
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Buscar por País" type="text" name="search" />
                </label>
            </div>
            <div className='mr-auto ml-auto flex justify-center'>
                <table>
                    <thead>
                        <tr>
                            <th className='w-28'>Foto</th>
                            <th className='w-28'>Nombre</th>
                            <th className='w-28'>Apellido</th>
                            <th className='w-28'>Genero</th>
                            <th className='w-28'>Pais</th>
                            <th className='w-28'>Accion</th>
                        </tr>
                    </thead>
                    <tbody className={"cangeColor" + changeColor} >
                        {dataOrigin ? (
                            dataOrigin.map((item: any, i: number) =>
                                <tr key={i} className='text-center background'>
                                    <td className='w-28 flex justify-center'><img src={item.picture.thumbnail} alt="" /></td>
                                    <td className='w-28'>{item.name.first}</td>
                                    <td className='w-28'>{item.name.last}</td>
                                    <td className='w-28'>{item.gender}</td>
                                    <td className='w-28'>{item.location.country}</td>
                                    <td className='w-28'>button</td>
                                </tr>
                            )
                        ) : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;