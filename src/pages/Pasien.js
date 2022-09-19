import React from 'react'
import { Badge } from 'reactstrap'
import Pasiens from './data/Pasiens'

export default function Pasien() {
  return (
    <>
         <h1>
          <Badge color="primary" >Data Pasien</Badge>
        </h1> 
        <Pasiens />
    </>
   
  )
}
