const app = require("express")();
const bodyParser = require("body-parser");
let {parce_func} = require('./utils/pharmacy_parcer');

app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.get("/", (req, res)=>{
    res.send('hello');
})

app.post("/api/order_count", (req, res)=>{
    ph_array = req.body;
    parce_func(ph_array);
    res.send(parce_func(ph_array));
})

app.listen(port, ()=>{
    console.log(`started on port ${port}`);
})