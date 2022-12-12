import React from 'react'
import '../sass/components/o.styles.scss'
import '../sass/components/x.styles.scss'


type SignProps = { sign : string ,  purpose :string}


const Token:React.FC<SignProps> = ({sign , purpose }) => {
  return (
    <div className={`${sign} ${purpose}`} >
      
    </div>
  )
}

export default Token
