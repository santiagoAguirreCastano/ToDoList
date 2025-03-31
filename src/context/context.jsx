import { createContext } from "react";
import { useState } from "react";
export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [contentTitle, setContentTitle] = useState('')

    return 
        value:{  {contentTitle, setContentTitle}}
        <TaskContext.Provider value={  {contentTitle, setContentTitle}} >
    </TaskContext.Provider>

}
