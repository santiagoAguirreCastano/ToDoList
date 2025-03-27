import React from 'react'
import {ItemTitleTask} from '../../components/ItemTitleTask/ItemTitleTask'
import {ItemText} from '../../components/ItemText/ItemText'
import {CheckTask} from '../../components/CheckTask/CheckTask'
export const DivTask = ({contentTitle,contentText}) => {
  return (
    <div className='border-1 p-4 rounded-sm'>

        <CheckTask />
        <ItemTitleTask content={contentTitle}/>
        <ItemText content={contentText}/>



    </div>
  )
}


