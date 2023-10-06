// import React, { useState, useEffect } from 'react';

// function DataTestComponent() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/users')  // Adjust the endpoint if necessary
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })
//       .catch(error => console.error('Error:', error));
//   }, []);  // The empty dependency array means this useEffect will run once, similar to componentDidMount.

//   return (
//     <div>
//       <h2>Data from Backend:</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>  {/* Display the fetched data */}
//     </div>
//   );
// }

// export default DataTestComponent;
