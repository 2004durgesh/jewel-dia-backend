const multer = require('multer');
const xlsx = require('xlsx');
const jewelleryModel = require('../models/jewelleryModel');
const diamondModel = require('../models/diamondModel');

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Function to upload Excel file and insert data into the database
const uploadExcel = upload.single('excelFile'); // Assuming the file field name is 'excelFile'

const processExcel = async (req, res, model) => {
  console.log(req.file)
  try {
    const fileBuffer = req.file.buffer;
    // Log information about the incoming request
    console.log('Incoming request for Excel file upload:', req.file.originalname);

    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // Log information about the processing of the Excel file
    console.log('Excel file processed successfully. Rows:', jsonData.length);

    // Process jsonData and insert into the database using the specified model
    await model.bulkCreate(jsonData);

    res.status(200).json({ message: 'Data inserted successfully' });
  } catch (error) {
    // Log errors and send an error response
    console.error('Error processing Excel file:', error);
    // Inside the catch block
res.status(500).json({ message: `Internal server error: ${error.message}` });

  }
};

const uploadJewelleryExcel = (req, res) => {
  processExcel(req, res, jewelleryModel);
};

const uploadDiamondsExcel = (req, res) => {
  processExcel(req, res, diamondModel);
};

module.exports = {
  uploadJewelleryExcel,
  uploadDiamondsExcel,
  uploadExcel
};
