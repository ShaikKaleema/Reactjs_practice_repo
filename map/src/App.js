import React, { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');
  const rawData = [
    { name: 'ram', expense: 8000 },
    { name: 'priya', expense: 2000 },
    { name: 'kavya', expense: 6000 },
  ];

  // map
  const mappedData = rawData.map(i => {
    return {
      ...i,
      companyName: 'Google'
    }
  });
  let list = mappedData;
  if (keyword.length > 0) {
    list = mappedData.filter(i => i.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
  }
  const totalExpense = list.reduce((acc, obj) => { return acc + obj.expense }, 0);

  return (
    <div>
      <h3>How to use Map, Filter and Reduce</h3>
      <div>
        <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="search by name" />
      </div>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Company</th>
              <th>Expense</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.companyName ? item.companyName : '-'}</td>
                    <td>{item.expense}</td>
                  </tr>
                )
              })
            }
          </tbody>
          <tfoot>
            <td colSpan={3}>Total</td>
            <td>{totalExpense}</td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
