import { read, utils } from 'xlsx'
// import XLSX from 'xlsx'

// export function readFile(file) {
//   console.log('reading file', file)
//   var reader = new FileReader()

//   reader.onload = function (e) {
//     var data = e.target.result
//     var workbook = XLSX.read(data, {
//       type: 'binary',
//     })

//     workbook.SheetNames.forEach(function (sheetName) {
//       // Here is your object
//       var XL_row_object = XLSX.utils.sheet_to_row_object_array(
//         workbook.Sheets[sheetName]
//       )
//       var json_object = JSON.stringify(XL_row_object)
//       console.log(json_object)
//     })
//   }

//   reader.onerror = function (ex) {
//     console.log(ex)
//   }

//   reader.readAsBinaryString(file)
// }

export function readFile(excelFile) {
  console.log('Excel file', excelFile)
  var reader = new FileReader()
  reader.onload = function (e) {
    var data = e.target.result
    console.log(e.target)
    var workbook = read(data, { type: 'binary' })
    let sheetName = workbook.SheetNames[0]
    let worksheet = workbook.Sheets[sheetName]
    let rowObject = utils.sheet_to_row_object_array(worksheet)
    const finalJsonData = JSON.stringify(rowObject, undefined, 4)
    console.log(finalJsonData)
  }
  reader.readAsBinaryString(this.excelFile)
}
