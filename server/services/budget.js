const fs = require('fs');
const parse = require('csv-parse');
const stringify = require('csv-stringify');

let data = [];
let columns = {
  id: 'id',
  name: 'Name'
};

for (var i = 0; i < 10; i++) {
  data.push([i, 'Name ' + i]);
}

stringify(data, { header: true, columns: columns }, (err, output) => {
  if (err) throw err;
  fs.writeFile('my.csv', output, (err) => {
    if (err) throw err;
    console.log('my.csv saved.');
  });
});

const config = {
  csvData: './budgetData/12_2019.csv',
  credit: true,
  month: '12',
  categories: [
    {
      name: 'Income',
      regex: '',
    },
    {
      name: 'Bills',
      regex: '',
    },
    {
      name: 'Groceries',
      regex: '',
    },
    {
      name: 'Entertainment',
      regex: '',
    },
    {
      name: 'Dining Out',
      regex: '',
    },
    {
      name: 'Transportation',
      regex: '',
    },
    {
      name: 'Car Gas',
      regex: '',
    },
    {
      name: 'Medical',
      regex: '',
    },
    {
      name: 'Education',
      regex: '',
    },
    {
      name: 'Miscellaneous',
      regex: '',
    },
    {
      name: 'Gear',
      regex: '',
    },
  ]
};

fs.readFile(config.csvData, function (err, fileData) {
  parse(fileData, {columns: false, trim: true}, function(err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
    console.log(rows)
  })
});