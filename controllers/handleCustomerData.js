const customerData = require("../models/customerData");

const fs = require("fs");
const path = require("path");
require("dotenv").config();

const dbConnect = require("../config/database");
// call to dbconnect
const connection = dbConnect();

const { BlobServiceClient, ContainerClient } = require("@azure/storage-blob");

// const blobServiceClient = new BlobServiceClient(
//   `https://${process.env.STORAGE_ACCOUNT_NAME}.blob.core.windows.net/?${process.env.AZURE_STORAGE_SAS_TOKEN}`
// );

// const containerClient = blobServiceClient.getContainerClient(
//   process.env.AZURE_STORAGE_CONTAINER_URL
// );

exports.handleCustomerData = async (req, res) => {
  // console.log("request object", req);

  console.log("req.body", req.body);
  // console.log("req.file", req.file);

  // const files = req.files;

  // console.log("files", files);
  // if (!files || !files.balance_sheet_certificate || !files.income_certificate) {
  //   return res.status(400).send("Required files are missing");
  // }

  try {
    // const balanceSheetFile = files.balance_sheet_certificate[0];
    // const balanceSheetBlobClient = containerClient.getBlockBlobClient(balanceSheetFile.filename);
    // const balanceSheetFilePath = path.resolve(balanceSheetFile.destination, balanceSheetFile.filename);
    // await balanceSheetBlobClient.uploadFile(balanceSheetFilePath);

    // const incomeCertificateFile = files.income_certificate[0];
    // console.log("incomeCertificateFile",incomeCertificateFile)
    // const incomeCertificateBlobClient = containerClient.getBlockBlobClient(incomeCertificateFile.filename);
    // console.log("incomeCertificateBlobClient",incomeCertificateBlobClient)
    // const incomeCertificateFilePath = path.resolve(incomeCertificateFile.destination, incomeCertificateFile.filename);
    // console.log("incomeCertificateFilePath",incomeCertificateFilePath)
    // await incomeCertificateBlobClient.uploadFile(incomeCertificateFilePath);

    // const metadata = {
    //   ...req.body,
    //   balance_sheet_certificate: balanceSheetFile.filename,
    //   income_certificate: incomeCertificateFile.filename,
    // };

    // for(let key in metadata){
    //   if(typeof metadata[key]==="string")
    //   {
    //     metadata[key]=metadata[key].trim().replace(/[^a-zA-Z0-9-_]/g, "")
    //   }
    // }

    // console.log("metadata",metadata)

    // const customer = await customerData.create({ // Using create method
    //   ...req.body,
    //   balance_sheet_certificate: balanceSheetBlobClient.url,
    //   income_certificate: incomeCertificateBlobClient.url,
    // });

    // Delete the files from the temporary storage
    // fs.unlinkSync(balanceSheetFilePath);
    // fs.unlinkSync(incomeCertificateFilePath);

    // res.status(200).send("Files uploaded to Azure Blob Storage and metadata saved to MongoDB");
    const {
      companyName
      
    } = req.body;

    const sql = `INSERT INTO supplier (
        companyName
      
      ) VALUES (?)`;

    const values = [
      companyName
      // address,
      // company_city,
      // telephone_number,
      // email_company,
      // website_address,
      // representative_name,
      // designation_name_representative,
      // email_representative,
      // mobile_number,
      // established_year,
      // year1,
      // inr1,
      // year2,
      // inr2,
      // year3,
      // inr3,
      // geographicService,
      // businessType,
      // legalStructure,
      // customLegalStructure,
      // category,
      // subcategory,
      // bank_name,
      // bank_address,
      // benificiary_name,
      // internation_baccount_number,
      // swift_bank_bic_code,
      // account_currency,
      // bank_account_number,
      // gst_no,
      // pan_no,
      // tan_no,
      // uin_no,
      // urn_no,
      // is_msme,
      // is_shop_act,
      // balance_sheet_certificate,
      // income_certificate,
      // consent
    ];

    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error("Error inserting into supplier table:", err);
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: "Supplier added successfully", data: results });
      }
    });
  } catch (error) {
    // console.error("Error uploading files to Azure Blob Storage or saving metadata", error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
