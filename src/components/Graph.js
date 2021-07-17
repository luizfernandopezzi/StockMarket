// import React, { useContext } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { FetchContext } from '../contexts/fetch';

// export const Graph = () =>{
//     const { intraday } = useContext(FetchContext)
//     return (
//       <div style={{ width: '100%', height: 300 }}>
//       <ResponsiveContainer>
//         <AreaChart
//           width={500}
//           height={400}
//           data={intraday}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="minute" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="average" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//     );
//   }