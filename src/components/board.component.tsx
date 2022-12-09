import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import Cell from './cell'


function Board() {

    const { board } = useAppSelector((state) => state.game)
    console.log(board)
  return (
    
       <div className="container">
        {
             
            board.map((row, indexRow ) => {
                return row.map((element , index) => 
                    <Cell key={''+indexRow+index}   indexRow={indexRow}  index ={index} element ={element}/>
                )
            })
        }

        </div>
    
  )
}

export default Board
