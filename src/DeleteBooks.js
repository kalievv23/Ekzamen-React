import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    border: 2px solid;
    /* padding: 20px; */
    /* height: 200px; */
    & img {
      width: 100px;
      height: 80px;
    }
`

function DeleteBooks(props) {

  return (
    <Div style={{backgroundColor: props.color}} className='imamazim'>
      <h5>{props.name}</h5>
      <p>PRICE: {props.price}</p>
      <div>
        <img src={props.img} alt="" />
      </div>
    </Div>
  )
}

export default DeleteBooks