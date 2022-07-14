const guestList = [
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['eausheutneoasuheosu', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Aleezeh Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Moiz Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Alia Hasan', '01. Jamaica'], 
['Raza Hasan', '01. Jamaica'], 
];

function createTable(tableData) {
      const existing = document.querySelectorAll('td');
      console.log(existing);
      if (existing.length > 0) {
        Array.prototype.forEach.call( existing, function( node ) {
          node.parentNode.removeChild( node );
      });
      }
      var table = document.querySelector('table');
      var row = {};
      var cell = {};
    
      tableData.forEach((rowData) => {
        row = table.insertRow(-1);
        rowData.forEach((cellData) => {
          cell = row.insertCell();
    			cell.textContent = cellData;
        });
      });
      document.body.appendChild(table);
    }

// How many rows should be shown
const rowCount = 10;
var myFunc01 = () => {
var i = 0;
var intr = setInterval(() => {
        if (i+rowCount > guestList.length) {i = 0;}
        var j = i+rowCount <= guestList.length ? i+rowCount : guestList.length;
        createTable(guestList.slice(i,j));
        i+= rowCount;
      }, 1000)
};

// Initialize
createTable(guestList.slice(0,rowCount));
myFunc01();