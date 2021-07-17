import React, { useState, useEffect, useCallback, useContext } from "react";

import star from '../assests/images/star.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import { FetchContext } from "../contexts/FetchContext";

export const StockData = () => {
    const { recents } = useContext(FetchContext)
    const [ mostRecent, setMostRecent] = useState()

    useEffect(()=>{
        setMostRecent(recents[recents.length - 1])
    },[recents])
    
    return (
        <div className="graph-infos">
            { !mostRecent ? null : (
            <div className='infos'>
                <div className='ticket-company'>
                    <img src={star} alt="Favoritar"></img>
                    <div>
                    <p>{mostRecent.companySymbol}</p>
                    <p>{mostRecent.companyName}</p>
                    </div>                        
                </div>
                <div>
                    <p>{mostRecent.latestPrice}</p>
                    <div>
                    { mostRecent.stockChange > 0 && <img src={up} alt="Variação"></img>}
                    { mostRecent.stockChange < 0 && <img src={down} alt="Variação"></img>}
                    <span>{mostRecent.stockChange}</span>
                    <span>{mostRecent.stockChangePercent}</span>
                    </div>
                </div>
            </div>
            )}
        </div> 
    )
}    
