import React from 'react'
import { Badge } from 'reactstrap'
import Dokters from './data/Dokters'

export default function Dokter() {
  return (
    <>
         <h1>
          <Badge color="primary" >Data Dokter</Badge>
        </h1> 
        <Dokters />
    </>
   
  )
}
