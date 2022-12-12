import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { startGame } from '../app/features/game/gameSlice'
import '../sass/components/footer.styles.scss'
import Token from './Token'


const Footer = () => {
    const { winner, player } = useAppSelector((state) => state.game)
    const dispatch = useAppDispatch()
  return (
    <div className='footer'>
      {
         //DO WE HAVE A WINNER ? 
          winner ? 
          <button className='start' onClick={()=>dispatch(startGame())}> new game </button> :
            //are we playing? 
            player ?   
              
              <>
                
                {
                  <Token sign ={`${player === 'x' ?'x' :'o'}`} purpose={`${player === 'x' ?'x-token-footer' :'o-token-footer'}`}/>
                  
                }  
              <span>player's turn</span> 
              </>  
                :
             <button className='start' onClick={()=>dispatch(startGame())}> new game </button>
         
      }
    </div>
  )
}


export default Footer