import React, { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');
  const rawData = [
    { name: 'Narendra Singh', email: 'narendra@gmail.com', mobile: '7838xxxxxx', expense: 8000 },
    { name: 'Rajat Singh', email: 'rajat@gmail.com', mobile: '5838xxxxxx', expense: 2000 },
    { name: 'Rahul Singh', email: 'rahul@gmail.com', mobile: '9838xxxxxx', expense: 6000 },
  ];

  // map
  const mappedData = rawData.map(i => {
    return {
      ...i,
      companyName: 'Google'
    }
  });

  // filter
  let list = mappedData;
  if (keyword.length > 0) {
    list = mappedData.filter(i => i.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
  }

  // reduce
  const totalExpense = list.reduce((acc, obj) => { return acc + obj.expense }, 0);

  return (
    <div style={{ margin: 'auto', width: '50%', marginTop: '10rem' }}>
      <h3>How to use Map, Filter and Reduce</h3>
      <div style={{ marginBottom: 16, textAlign: 'right' }}>
        <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="search by name" />
      </div>
      <div>
        <table style={{ width: '100%' }} border={true}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Mobile</th>
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
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.expense}</td>
                  </tr>
                )
              })
            }
          </tbody>
          <tfoot>
            <td colSpan={5}>Total</td>
            <td>{totalExpense}</td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
