import React, { useContext, useState } from "react";

import lupa from '../assests/images/search.svg'

import { FetchContext } from "../contexts/FetchContext";

export const Search = () => {
  const {setStock} = useContext(FetchContext)

  const[input, setInput] = useState('')
  
  const handleSubmit = (event) =>{
      event.preventDefault();
      setStock(input)
  }
  
    return (
        <form 
          className="search"
          onSubmit={handleSubmit}>
          <input
            type="text"
            name="stock"
            value={input}
            onChange={(event)=>{setInput(event.target.value)}}
          ></input>
          <button 
            type="submit">
            <img src={lupa} alt="Buscar cotação"></img>
          </button>
        </form>
    )
}