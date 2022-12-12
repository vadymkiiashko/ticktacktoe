import React from 'react'
import Token from './Token'
import '../sass/components/victory.styles.scss'
import { useAppSelector , useAppDispatch } from '../app/hooks'


const Victory = () => {
    const { winner  } = useAppSelector(state => state.game)
  return (
    <div className='victory'>
        
        {   
            winner === 'xy' ?  
                <span>It's a draw</span>

                :
                <>
                <div className='player-container'>
                    {
                        <Token sign ={`${winner === 'x' ?'x' :'o'}`} purpose=''/>
                      
                    }
                 </div>
                <span>won the game</span>
                </>
        }
    </div>
  )
}

export default Victory 
