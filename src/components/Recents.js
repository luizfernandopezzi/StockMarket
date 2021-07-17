import { useContext, useState } from "react";

import star from '../assests/images/star.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

export function Recents ({item}) {
  return(
    <li>
        <div className="recents">
          <img src={star} alt="Favoritar"></img>
          <p>Simbolo Empresa</p>
          <div>
              <p>{item.companySymbol}</p>
              <p>{item.companyName}</p>
          </div>
          <p>{item.stockChangePercent}</p>
          { item.stockChangePercent > 0 && <img src={up} alt="Variação"></img>}
          { item.stockChangePercent < 0 && <img src={down} alt="Variação"></img>}
      </div>
    </li>
  )
}


