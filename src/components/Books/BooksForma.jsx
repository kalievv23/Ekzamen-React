import React, { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
    & div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 600;
        width: 300px;
        margin: auto;
    }
    & input {
        width: 300px;
        height: 30px;
        border-radius: 12px;
        outline: none;
        border: none;
        background-color: #fffcfc;
    }
    & label {
        margin-left: 5px;
    }
    & .btns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 0px 0px;
    }
    & button {
        padding: 5px 15px 5px 15px;
        border: none;
        border-radius: 10px;
        background-color: bisque;  
        font-size : 15px;
        font-weight: 700;
    }
`

const BooksForma = (props) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [url, setUrl] = useState("")
    const [color, setColor] = useState("")

    function nameHandler(e) {
        setName(e.target.value)
    }
    function priceHandler(e) {
        setPrice(e.target.value)
    }
    function urlHandler(e) {
        setUrl(e.target.value)
    }
    function colorHandler(e) {
        setColor(e.target.value)
    }

    function addBookHandler(e) {
        const newBook = {
            name: name,
            price: price,
            img: url,
            data: new Date("2016, 09, 15"),
            color: color,
            id: Math.random()
        }
        if (name.trim().length>0 && price.trim().length>0 && url.trim().length>0 && color.trim().length>0) {
            props.onSaveBook(newBook)
        }
        // setColor("")
        // setName("")
        // setPrice("")
        // setUrl("")
    }

  return (
    <Div>
        <div>
        <label htmlFor="">Name:</label>
        <input value={name} onChange={nameHandler} type="text" />
        </div>
        <div>
        <label htmlFor="">Price:</label>
        <input value={price} onChange={priceHandler} type="text" />
        </div>
        <div>
        <label htmlFor="">Image's URL:</label>
        <input value={url} onChange={urlHandler} type="text" />
        </div>
        <div>
        <label htmlFor="">Background:</label>
        <input value={color} onChange={colorHandler} type="text" />
        </div>
        <div className='btns'>
        <button onClick={() => props.closeModal(false)}>CANCEL</button>
        <button onClick={addBookHandler} type='submit'>ADD</button>
        </div>
    </Div>
  ) 
}

export default BooksForma