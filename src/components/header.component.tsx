import React from 'react'
import { useAppSelector , useAppDispatch } from '../app/hooks'
import { abortGame } from '../app/features/game/gameSlice'
import '../sass/components/header.styles.scss'



const Header = () => {
    const { player } = useAppSelector((state) => state.game)
    const dispatch = useAppDispatch()
  return (
    <div className="header">
      <span > tick tack</span>
      {
        player !=='' ? <button className='abort' onClick={()=>dispatch(abortGame())}>abort</button> :''
      }
    </div>
  )
}

export default Header
