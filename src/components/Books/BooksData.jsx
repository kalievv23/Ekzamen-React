import React from 'react'

const BooksData = (props) => {

    const day = props.data.toLocaleDateString("en-US", {day: "2-digit"})
    const month = props.data.toLocaleDateString("en-US", {month: "2-digit"})
    const year = props.data.getFullYear()

  return (
    <div>
        <span>{day}. </span>
        <span>{month}. </span>
        <span>{year} </span>
    </div>
  )
}

export default BooksData