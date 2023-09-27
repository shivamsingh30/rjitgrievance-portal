const AdminModal=require('../models/Admin')

class FrontController{
 static home=async(req,res)=>{
    try{
        res.render('home',{message: req.flash('error')})
    }
    catch(error){
            console.log(error)
    }
 }

 static system=async(req,res)=>{
    try{
        res.render('system')
    }
    catch(error){
            console.log(error)
    }
 }

 static feature=async(req,res)=>{
    try{
        res.render('feature')
    }
    catch(error){
            console.log(error)
    }
 }

 static benifit=async(req,res)=>{
    try{
        res.render('benifit')
    }
    catch(error){
            console.log(error)
    }
 }

 static help=async(req,res)=>{
    try{
        res.render('help')
    }
    catch(error){
            console.log(error)
    }
 }

 static about=async(req,res)=>{
    try{
        res.render('about')
    }
    catch(error){
            console.log(error)
    }
 }
 static contact=async(req,res)=>{
    try{
        res.render('contact')
    }
    catch(error){
            console.log(error)
    }
 }
 static student=async(req,res)=>{
    try{
        res.render('student')
    }
    catch(error){
            console.log(error)
    }
 }
 static principal=async(req,res)=>{
    try{
        res.render('principal')
    }
    catch(error){
            console.log(error)
    }
 }
 static admin=async(req,res)=>{
    try{
        res.render('admin')
    }
    catch(error){
            console.log(error)
    }
 }
 



}




module.exports=FrontController