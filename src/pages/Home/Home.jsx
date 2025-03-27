import React from 'react'
import { DivTask } from '../../Layouts/DivTask/DivTask'
import { Main } from '../../Layouts/Main/Main'
import { InputTask } from '../../components/InputTask/InputTask'
import { TextAreaDescription } from '../../components/TextAreaDescription/TextAreaDescription'
import {ItemTitles} from '../../components/ItemTitles/ItemTitles'   
import { Button } from '../../components/Button/Button'
export const Home = () => {
  return (     
    <Main>
        <div className="flex flex-col justify-center gap-5 mb-5 items-center rounded-sm border-1 p-5">
            <ItemTitles content="To Do List" styles="font-medium text-[1.7rem] mb-[2rem]"/>
            <InputTask styles="w-[28.2rem] border-1 rounded-sm h-[2.5rem]"/>
            <TextAreaDescription styles="w-[28.2rem] h-[5rem] border-1 rounded-sm"/>
            <Button content="Add Task" styles="w-[28.2rem] bg-sky-500 h-[2rem] rounded-sm"/>
        </div>


        <div className="flex flex-col gap-5 border-1 p-5 rounded-sm">
            <div className='flex gap-28 mb-5 justify-center'>
                <Button content="All" styles="border-1 pl-3 pr-3 rounded-sm"/>
                <Button content="Pending" styles="border-1 pl-3 pr-3 rounded-sm"/>
                <Button content="Completed" styles="border-1 pl-3 pr-3 rounded-sm"/>             
            </div> 
            <DivTask contentTitle="Hacer Crud" contentText="Debe actualizar eliminar y agregar a la base de datos"/>
            <DivTask contentTitle="Hacer juego" contentText="Debe hacer el juego principlal"/>
            <DivTask contentTitle="Hacer gestion de inventario" contentText="Debe hacer la gestion del inventario dentro de la aplicacion"/>   
        </div>


    


    </Main>
  )
}

