import React from 'react'
import { markCell } from '../app/features/game/gameSlice'
import { useAppDispatch } from '../app/hooks'
import O from './O'
import X from './X'

type CellProps = { indexRow : number , index : number , element :string}

const Cell :React.FC<CellProps> = ({indexRow , index , element} ) => {
    
    const dispatch = useAppDispatch()    
    return (
        <div  className='cell' onClick={ element === '' ? ()=>dispatch(markCell({indexRow , index })) : ()=>{}}> 
        {
                element ==='' ? '' : 
                    element === 'x' ?  <X /> : <O />                 
        }
        </div>
    )
}

export default Cell
