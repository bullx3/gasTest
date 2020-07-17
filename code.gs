function myFunction() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let value = sheet.getRange("A1").getValue();
  console.log(value); 
}
