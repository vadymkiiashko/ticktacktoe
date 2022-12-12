import React from 'react'
import { markCell } from '../app/features/game/gameSlice'
import { useAppDispatch , useAppSelector } from '../app/hooks'
import Token from './Token'
import '../sass/components/cell.styles.scss'

type CellProps = { indexRow : number , index : number , element :string}

const Cell :React.FC<CellProps> = ({indexRow , index , element} ) => {
    const { winner, player } = useAppSelector((state) => state.game)
    const dispatch = useAppDispatch()    
    return (
        <div  className={`cell ${player ? 'game' : ''}`} onClick={ player !== '' ? ()=>dispatch(markCell({indexRow , index })) : ()=>{}}> 
        {
                element ==='' ? '' : 
                    <Token sign ={`${element === 'x' ?'x' :'o'}`} purpose={`${element === 'x' ?'' :'o-game'}`}/>
                                  
        }
        </div>
    )
}

export default Cell
