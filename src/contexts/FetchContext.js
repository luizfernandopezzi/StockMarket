import React, { createContext, useEffect, useState, useCallback } from 'react';

export const FetchContext = createContext({})

export const FetchContextProvider = ({ children}) => {
    const [ recents, setRecents ] = useState([]);
    const [ stock, setStock ] = useState('')

    // const [ companySymbol, setCompanySymbol ] = useState('')
    // const [ companyName, setCompanyName ] = useState('')
    // const [ stockChange, setStockChange ] = useState('')
    // const [ stockChangePercent, setStockChangePercent ] = useState('')
    
    console.log('Stock: ', stock)
    console.log('Recents: ', recents)

    // function writeStockInfo(){
    //     const recent = {
    //         stock: stock,
    //         companySymbol: companySymbol,
    //         companyName: companyName,
    //         stockChange: stockChange,
    //         stockChangePercent: stockChangePercent
    //         }
    //       console.log('Recent: ', recent);
    //       setRecents([...recents, recent])
    //       console.log('Recents getData: ', recents)
    // }

    async function getData() {
      const response = await fetch(`https://cloud.iexapis.com/stable/stock/${stock}/quote/lquote?token=pk_ac84674032ce467bbcc6d784c26646b6`);
      const data = await response.json();
      const recent = {
        stock: stock,
        companySymbol: data.symbol,
        companyName: data.companyName,
        lastestPrice: data.latestPrice,
        stockChange: data.change,
        stockChangePercent: data.changePercent
        }
      console.log('Recent: ', recent);
      setRecents([...recents, recent])
      console.log('FetchData: ', data)
    }
    
    useEffect(() => {
      getData();
    }, [stock]);

    return(
        <FetchContext.Provider value={{ recents, setRecents, stock, setStock }}>
            {children}
        </FetchContext.Provider>
    )
}