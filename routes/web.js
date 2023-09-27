const express = require("express");
const route = express.Router()

const FrontController = require('../controller/FrontController');
const AdminController = require('../controller/Admin/AdminController')
const StudentController = require('../controller/StudentController');
//const auth= require('../middlewear/auth')

//route changes

//routing
// route.get('/',(req,res)=>{
//     res.send('hello page')
//   })
//   route.get('/about',(req,res)=>{
//     res.send('hello about')
//   })
//   route.get('/team',(req,res)=>{
//     res.send('hello team')
//   })
//   route.get('/contact',(req,res)=>{
//     res.send('hello contact')
//   })

route.get('/', FrontController.home)
route.get('/about', FrontController.about)
route.get('/contact', FrontController.contact)
//route.get('/login', FrontController.login)
route.get('/system', FrontController.system)
route.get('/benifit', FrontController.benifit)
route.get('/help', FrontController.help)
route.get('/feature', FrontController.feature)
route.get('/student', FrontController.student)



// route.get('/principal', FrontController.principal)
// route.get('/admin', FrontController.admin)

//admincontroller
route.get('/admin/dashboard', AdminController.dashboard)
route.get('/admin/register', AdminController.register)
route.get('/admin/login', AdminController.login)
route.post('/admininsert', AdminController.admininsert)
route.post('/admin/verifylogin', AdminController.verifylogin)
route.post('/adminverifylogin', AdminController.adminverifylogin)





//studentcontroller
route.get('/admin/addstudent', StudentController.addstudent)
route.post('/studentinsert', StudentController.studentinsert)
route.get('/admin/studentview/:id', StudentController.viewstudent)
route.get('/admin/editstudent/:id', StudentController.editstudent)
route.post('/admin/studentupdate/:id', StudentController.studentupdate)
route.get('/admin/studentdelete/:id', StudentController.studentdelete)
route.post('/verifylogin', StudentController.verifylogin)






module.exports = route;


