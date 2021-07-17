import { useContext, useState, useEffect } from "react";

import star from '../assests/images/star.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import { Recents } from "./Recents";

import { FetchContext } from "../contexts/FetchContext";

export function RecentsList () {
  const { recents } = useContext(FetchContext)
  console.log('List: recents ', recents)

  const[ list, setList ] = useState()
  useEffect(()=>{
    setList(recents)
  },[recents])

  console.log('List: list ', list)

  return(
    <div>
      { !list ? null : (
            list.map((item)=>
              <Recents item={item}/>)
      )}
    </div>
  )
}