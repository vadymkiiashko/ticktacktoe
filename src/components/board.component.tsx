import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import Cell from './cell'
import Victory from './victory.component'
import '../sass/components/board.styles.scss'


function Board() {

    const { board ,player , winner  } = useAppSelector((state) => state.game)
    console.log(board)
    const appClass = `${player && winner ? '' : player ? 'app-active' :''}`

  return (
    <div className={`app-container ${appClass}`}> 
        {
            winner ? <Victory /> :
            <div className="container">
            {
                 
                board.map((row, indexRow ) => {
                    return row.map((element , index) => 
                    <Cell key={''+indexRow+index}   indexRow={indexRow}  index ={index} element ={element}/>
                    )
                })
            }
            </div>

        }
        
    </div>
    
  )
}

export default Board
