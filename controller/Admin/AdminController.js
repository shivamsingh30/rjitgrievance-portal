const AdminModal = require("../../models/Admin")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AdminController {
    static dashboard = async (req, res) => {
        try {
            res.render('admin/dashboard')
        }
        catch (error) {
            console.log(error)
        }
    }

    static login = async (req, res) => {
        try {
            res.render('admin/login')
        }
        catch (error) {
            console.log(error)
        }
    }

    static register = async (req, res) => {
        try {
            res.render('admin/register')
        }
        catch (error) {
            console.log(error)
        }
    }

    static admininsert = async (req, res) => {
        try {
            //console.log("first")
            // console.log(req.body)
            const { name, email, password } = req.body
            const hashpassword = await bcrypt.hash(password, (10))
            const r = new AdminModal({
                name: name,
                email: email,
                password: hashpassword
            })

            await r.save()
            res.redirect('/admin/login')
        }
        catch (error) {
            console.log(error)
        }
    }

    static verifylogin = async (req, res) => {
        try {
            //console.log(req.body)
            const { email, password } = req.body
            if (email && password) {
                const admin = await AdminModal.findOne({ email: email })
                // console.log(admin)
                if (admin != null) {
                    const ismatched = await bcrypt.compare(password, admin.password)
                    if (ismatched) {
                        res.redirect('/admin/dashboard')
                    }
                    else{
                        res.redirect('/admin/login')
                    }
                }
                else {
                    res.redirect('/admin/login')
                }
            }
            else {
                res.redirect('/admin/login')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    static adminverifylogin = async (req, res) => {
        try {
            // console.log(req.body)
            const { email, password } = req.body
            if (email && password) {
                const admin = await AdminModal.findOne({ email: email })

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
                    req.flash('error', 'RJIT Adminstrative login Workplace !')
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

module.exports = AdminController