import express from 'express'
import { type } from 'os';

const app=express();


interface Params{
    a:number;
    b:number;
}

type Add = (x: Params) => number;

const add: Add= x => {
    return x.a+x.b;
};

app.get('/', req=>{
   add({a:1, b:2})
})

app.listen(3001, () =>{
    console.log('started')
})
