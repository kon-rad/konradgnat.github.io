
/** Configuration **/
const CREDIT = false;
const MONTH = '12';
// const INPUT_FILE = '12_2019.csv';
const DATA_FILEPATH = './budgetData/';
// const INPUT_FILE = '01_2020.csv';
const INPUT_FILE = 'input3.csv';
/** End Configuration **/


const config = {
  csvData: DATA_FILEPATH + INPUT_FILE,
  csvDataOutput: DATA_FILEPATH + 'out_' + INPUT_FILE,
  credit: CREDIT,
  month: MONTH,
  categories: [
    {
      name: 'Income',
      id: 'income',
      regex: 'BACKSTOP',
    },
    {
      name: 'Bills',
      id: 'bills',
      regex: 'DIGITALOCEAN|Google Storage|COINMACH|YouTubePremium|LEMONADE\.COM|JetBrains|Spotify|APPLE\.COM\/BILL|WATERTONPROP|COMED DES',
    },
    {
      name: 'Groceries',
      id: 'groceries',
      regex: 'VENDING|CVS\/PHARMACY|7-ELEVEN|WHOLEFDS|CANTEEN',
    },
    {
      name: 'Entertainment',
      id: 'entertainment',
      regex: 'AMC|Steamgames\.com',
    },
    {
      name: 'Clothes',
      id: 'clothes',
      regex: 'H&M',
    },
    {
      name: 'Cafe',
      id: 'cafe',
      regex: 'COFFEE|TOWER HOUSE|STARBUCKS|DEPARTMENT OF C|RITUAL\-DEPA',
    },
    {
      name: 'Dining Out',
      id: 'diningOut',
      regex: 'PANDA EXPRESS|MCDONALD\'S|GRUBHUB|TACO BELL|QDOBA|PIZZA|5GUYS|SWEETGREEN|Wow Bao|Popeye\'s Chicken|JIMMY JOHNS|CHIPOTLE|RITUAL\-PAND',
    },
    {
      name: 'Transportation',
      id: 'transportation',
      regex: 'UBER',
    },
    {
      name: 'Car Gas',
      id: 'carGas',
      regex: '',
    },
    {
      name: 'Medical',
      id: 'medical',
      regex: 'YOGA',
    },
    {
      name: 'Education',
      id: 'education',
      regex: 'Audible',
    },
    {
      name: 'Miscellaneous',
      id: 'miscellaneous',
      regex: 'Wikipedia Gift|NCIF CONCIERGE',
    },
    {
      name: 'Gear',
      id: 'gear',
      regex: 'DJI|AMZN|RACEDAYQUADS|GETFPVCOM|JC LICHT',
    },
  ]
};
let columns = {
  category: 'Category',
  date: 'Date',
  description: 'Description',
  location: 'Location',
  amount: 'Amount',
};
let sections = {
  income: 'Income',
  bills: 'Bills',
  groceries: 'Groceries',
  entertainment: 'Entertainment',
  clothes: 'Clothes',
  cafe: 'Cafe',
  diningOut: 'Dining Out',
  transportation: 'Transportation',
  carGas: 'Car Gas',
  medical: 'Medical',
  education: 'Education',
  miscellaneous: 'Miscellaneous',
  gear: 'Gear',
  notFound: 'Not Found',
};
const dataBySection = {
  income: [],
  bills: [],
  groceries: [],
  entertainment: [],
  clothes: [],
  cafe: [],
  diningOut: [],
  transportation: [],
  carGas: [],
  medical: [],
  education: [],
  miscellaneous: [],
  gear: [],
  notFound: [],
};

const c =  {
  dataBySection,
  config,
  columns,
  sections,
};


const fs = require('fs');
const parse = require('csv-parse');
const stringify = require('csv-stringify');
// const c = require('./config');

let data = [];

fs.readFile(c.config.csvData, function (err, fileData) {
  parse(fileData, { columns: false, trim: true }, function(err, rows) {
    if (err) {
      return console.error(err);
    }
    rows.forEach(row => {
      if (!row[0].match(new RegExp(`^${c.config.month}\/`))) {
        return;
      }
      let newRow = row;
      if (c.config.credit) {
        newRow.splice(1, 1);
      } else {
        newRow.splice(3, 1);
        newRow.splice(2, 0, null);
      }

      if (newRow[3] && newRow[3].match(/^-/)) {
        newRow[3] = newRow[3].substring(1);
      }
      // add first blank column for title
      newRow.unshift(null);
      let isFound = false;
      c.config.categories.forEach(cat => {
        if (
          cat.regex
          && newRow[2]
          && newRow[2].match(new RegExp(cat.regex, 'ig'))
        ) {
          isFound = true;
          c.dataBySection[cat.id].unshift(row);
        }
      });
      if (!isFound) {
        console.log('Section not found', newRow[2]);
        c.dataBySection.notFound.unshift(row);
      }
    });

    // create first row of each section, it includes the title and blank row
    Object.keys(c.dataBySection).forEach(sect => {
      c.dataBySection[sect].unshift([sections[sect], null, null, null, null]);
    });
    // console.log(c.dataBySection);
    Object.keys(c.dataBySection).forEach(sect => {
      data = [ ...data, ...c.dataBySection[sect]];
    });

    stringify(data, { header: true, columns: c.columns }, (err, output) => {
      if (err) throw err;
      fs.writeFile(c.config.csvDataOutput, output, (err) => {
        if (err) throw err;
        console.log(c.config.csvDataOutput);
      });
    });
  })
});