import React, { useState } from 'react'
import BooksRender from './BooksRender'
import styled from 'styled-components'
import BooksForma from './BooksForma'
import DeleteBooks from '../../DeleteBooks'

const Container = styled.div`
    width: 700px;
    margin: auto;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 20px white;
    & header{
        padding: 15px;
        font-weight: bold;
        background-color: #e6e6e6;
    }
    & span {
        font-size: 20px;
        cursor: pointer;
    }
    & span:hover {
        color: #7a7a7a;
        border-bottom: 1px solid;
    }
    & .closeModal{
        transition: 0.5s;
    }
     .closeModal:hover {
        transform: scale(1.2);
    }
`
const Books = () => {

    const books = [
        {
            id: "1",
            name: "Ak-tosh",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
            price: "1400$",
            data: new Date(),
            color: "blue"
        },
        {
            id: "3",
            name: "Kok-tosh",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
            price: "1400$",
            data: new Date(),
            color: "red"
        },
        {
            id: "2",
            name: "Alapar",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
            price: "1400$",
            data: new Date(),
            color: "gold"
        },
        
    ]


    const [openModal, setOpenModal] = useState(false)                         /////////////////////////////////
    const [openDeletes, setOpenDeletes] = useState(false)

    const [state, setState] = useState(books)
    const [deletes, setDeletes] = useState([])
    
    // console.log(deletes);
    
    function saveBook(newBook) {
        setState((arr) => [...arr, newBook])
    }
    
    function bookDelete(id) {
        setState(            
            state.filter((el) => {
                if (el.id !== id) {
                    return el
                }
            })
            )
        state.filter((x) => {
            if (x.id !== id) {
                return x
            }
            setDeletes((arr) => [...arr, x])        
        })
    }

    // function vosstanovit(id) {
    //     deletes.filter((el) => {
    //         if (el.id !== id) {
    //             return el
    //         }
    //         setState((arr) => [...arr, el])
    //     })
    //     deletes.filter((x) => {
    //         if (x.id == id) {
    //             console.log(x);
    //             return x
    //         }
    //         setDeletes(() => [])        
    //     })
    // }

  return (
    <Container className='container'>
        <header>
            <div style={{display: "flex", justifyContent: 'space-between'}}>
                <span onClick={() => setOpenModal(true)}>ADD BOOK</span>
                <span onClick={() => setOpenDeletes(true)}>DELETE BOOKS</span>
            </div>
            {openModal && <BooksForma closeModal = {setOpenModal} onSaveBook = {saveBook}/>}
            {openDeletes && <div>
            {deletes.map((el) => {
                return < DeleteBooks key = {el.id} id = {el.id} name = {el.name} img = {el.img} price = {el.price} color = {el.color} />
            })}
          <span className='closeModal' onClick={() => setOpenDeletes(false)}>CloseModal</span>
            </div>}
        </header>
        <h1>BOOKS</h1>
        {state.map((el) => {
            return <BooksRender onDelete = {bookDelete} key = {el.id} id = {el.id} name = {el.name} img = {el.img} price = {el.price} data = {el.data} color = {el.color}/>
        })}
    </Container>
  )
}

export default Books