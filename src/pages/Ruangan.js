import React from 'react'
import { Badge } from 'reactstrap'
import Ruangans from './data/Ruangans'

export default function Ruangan() {
  return (
    <>
         <h1>
          <Badge color="primary" >Data Ruangan</Badge>
        </h1> 
        <Ruangans />
    </>
   
  )
}
