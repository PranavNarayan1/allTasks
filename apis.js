import express, {json} from "express";
const app = express();
app.use(json());
import {userDetails, getUser, updateUser, deleteUser, arrayObj} from './controllers/apiFunctions.js'


app.post('/addUser', userDetails);

app.get('/user/:id/:name', getUser);

app.patch('/updateUser/:id/:name', updateUser);

app.delete('/deleteUser/:id', deleteUser);

app.get('/arrayOfObjects/:id', arrayObj);

app.listen(3500, ()=>{
    console.log("Runnning at port 3500");
});