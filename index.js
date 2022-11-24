const express=require("express")
const app=express()
const port=5000;
const emp={id:1,name:"ravi",age:"20"}
const students=require("./data.js")
const cors=require("cors")

app.use(cors());

app.get("/",(req,res)=>{
	res.send("hi my name is ravi")
})

app.get("/user",(req,res)=>{
	res.send("he did any to given work")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})	
app.listen(port,()=>console.log("Spring is in the air"))
