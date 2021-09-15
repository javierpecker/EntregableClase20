import mongoClient from 'mongoose'

const URL = 'mmongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodbongodb://localhost:27017/ecommerce';


export async function connect() {

  try {
    await mongoClient.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("DB CONNECTED!!");

  } catch (e) {
    console.log("Error: ", e);
    
  }

};

connect();