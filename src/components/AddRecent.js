// import { useState, useContext } from "react";
// import { FetchContext } from "../contexts/fetch";

// export const AddRecent= ({onSendAppointment, lastId}) => {
//   const { companySymbol, companyName, latestPrice, stockChangePercent } = useContext(FetchContext)
  

//   function formDataPublish(){
//     const newRecent = {
//       id: lastId + 1,
//       RecenCompanySymbol: companySymbol,
//       RecentCompanyName: companyName,
//       RecentLatestPrice: latestPrice,
//       RecentStockChangePercent: stockChangePercent,
//     }
//     onSendAppointment(newRecent)
//   }

//   return(
//     <div>
//         <button onClick={formDataPublish}>
//             Submit
//         </button>
//     </div>
//   )
// }