const AdminModal = require('../models/Admin')
const StudentModal = require('../models/Student')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class StudentController {

    static addstudent = async (req, res) => {
        try {
            const data = await StudentModal.find()
            console.log(data)
            res.render('admin/student/addstudent', { d: data })
        }
        catch (error) {
            console.log(error)
        }
    }

    static studentinsert = async (req, res) => {
        try {
            // console.log(req.body)
            const { name, email, password } = req.body
            const hashpassword = await bcrypt.hash(password, (10))
            const r = new StudentModal({
                name: name,
                email: email,
                password: hashpassword
            })
            await r.save()
            res.redirect('/admin/addstudent')
        }
        catch (error) {
            console.log(error)
        }
    }

    static viewstudent = async (req, res) => {
        try {
            // console.log(req.params.id)
            const data = await StudentModal.findById(req.params.id)
            //console.log(result)
            res.render('admin/student/view', { d: data })
        }
        catch (error) {
            console.log(error)
        }
    }


    static studentdelete = async (req, res) => {
        try {

            const data = await StudentModal.findByIdAndDelete(req.params.id)

            res.redirect('/admin/addstudent')
        }
        catch (error) {
            console.log(error)
        }
    }

    static editstudent = async (req, res) => {
        try {
            // console.log(req.params.id)
            const data = await StudentModal.findByIdAndUpdate(req.params.id)
            //console.log(data)
            res.render('admin/student/edit', { d: data })
        }
        catch (error) {
            console.log(error)
        }
    }

    static studentupdate = async (req, res) => {
        try {
            console.log(req.body)
            //  console.log(req.params.id)

            const data = await StudentModal.findById(req.params.id)

            const update = await StudentModal.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                email: req.body.email

            })

            await update.save()
            res.redirect('/admin/addstudent')

        }
        catch (error) {
            console.log(error)
        }
    }



    static verifylogin = async (req, res) => {
        try {
            // console.log(req.body)
            const { email, password } = req.body
            if (email && password) {
                const admin = await StudentModal.findOne({ email: email })

                if (admin != null) {
                    const ismatched = await bcrypt.compare(password,admin.password)

                    if (ismatched) {

                       // generate token
                        const token =jwt.sign({id:admin._id},'shivamsingh5875')
                       // console.log(token)
                          res.cookie('token',token)
                        res.redirect('/admin/dashboard')
                    }
                    else {
                          req.flash('error', 'Email and Password does not match')
                        res.redirect('/')
                    }
                }
                else {
                    req.flash('error', 'You are not register college student')
                    res.redirect('/')
                }
            }
            else {
                 req.flash('error', 'All field are required')
                res.redirect('/')
            }
        }
        catch (error) {
            console.log(error)
        }
    } 




}

module.exports = StudentController