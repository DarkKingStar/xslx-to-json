const XLSX = require('xlsx');
const fs = require('fs');






// how to start reading from a particular row of the excel

function xlsxtojson(start, filename){
    const finalObject = {};
    const myFile = fs.readFileSync(`./${filename}.xlsx`);
    const data = XLSX.read(myFile, { type: 'buffer' });
    data.SheetNames.forEach(sheetName => {
        let rowObject = XLSX.utils.sheet_to_json(data.Sheets[sheetName],
             { range: start }); // start is the row number from where you want to start reading
      
        finalObject[sheetName] = rowObject;
    });
    fs.writeFileSync(`./${filename}.json`, JSON.stringify(finalObject,null, 2));
}

xlsxtojson(3, "Mapping of the ICD-10-CM Recorded");


