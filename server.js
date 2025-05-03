import express from 'express';
import cors from 'cors';



// importing the database connection file config file



// importing the product router and user router




// app config 
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());




// api endpoints
app.get('/', (req, res) => {
   res.send('API is running...');
}
);


app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});
