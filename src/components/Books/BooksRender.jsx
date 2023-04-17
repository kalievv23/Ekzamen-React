import React from 'react'
import BooksData from './BooksData'
import styled from 'styled-components'

const Div = styled.div`
    border: 1px solid;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    & img {
        width: 250px;
        height: 200px;
    }
    & h5 {
        font-size: 20px;
        text-transform: uppercase;
        margin-top: 50px;
    }
    & div {
        /* border: 1px solid; */
        width: 223px;
    }
    & .delete:hover {
        color: red;
        font-size: 18px;
        font-weight: bold;
        transition: 0.3s;
    }     
`

const BooksRender = (props) => {

    function deleteBook() {
        props.onDelete(props.id)
    }
  return (
    <Div style={{backgroundColor: props.color}}>
        <div>
            <h5>{props.name}</h5>
            <p>PRICE: {props.price}</p>
        </div>
        <img src={props.img} alt="" />
        <div>
            <p style={{marginTop: "50px"}}><BooksData data = {props.data}/></p>
            <p className='delete' style={{cursor: "pointer"}} onClick={deleteBook}>DELETE</p>
        </div>
    </Div>
  )
}

export default BooksRender