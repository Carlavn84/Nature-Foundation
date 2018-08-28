const bodyparser = require('body-parser');
var {check, validationResult} = require('express-validator/check');
const bcrypt = require('bcrypt');
// const User = require('./models/User');
// const Post = require('./models/Post');
const adminController = require("./admincontroller");
const Admin = require('./models/Admin');
const ForestArea = require('./models/ForestArea');
const multer = require('multer');
// var Upload = require('upload-file');
var upload = multer({ dest: 'uploads/' });
var express = require('express');


//To get all adminS
/Admin login////////////////////////////
module.exports = function(app){
    var registerAdmin = (req, res) => {
        const admin = new Admin(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({ status: "error", errors: errors.mapped() });
        }
        admin.jobTitle = "Admin";
        admin.password = admin.hashPassword(admin.password);
        admin
            .save()
            .then(admin => {
                return res.send({ status: "success", message: "registerd successfuly" });
            })
            .catch(error => {
                console.log(error);
                return res.send({ status: "error", message: error });
            });
    };
    
    app.post("/api/admin/register",
        [
            check("name", "please enter your full name")
                .not()
                .isEmpty(),
            check("name", "Your name can not contain any numbers").matches(
                /^[A-z''., ]+$/i
            ),
            check("name", "Your name should be more than 4 characters").isLength({
                min: 4
            }),
    
            check("email", "your email is not valid").isEmail(),
            check("email", "email already exist").custom(function (value) {
                return Admin.findOne({ email: value }).then(Admin => !Admin);
            }),
            // check("jobTitle", "please enter your full description")
            //   .not()
            //   .isEmpty(),
            // check("jobTitle", "your description must not contain any numbers").isAlpha(),
            check(
                "password",
                "your password should be 5 or more characters"
            ).isLength({ min: 5 }),
            check("con_password", "your password confirmation dose not match").custom(
                (value, { req }) => value === req.body.password
            )
        ],
        registerAdmin
    );




















const logValidation = [
    check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required"),
    check("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
];

var login = (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ err: errors.mapped() });
    }
    Admin.findOne({ 
        email: req.body.email
    }).then(function (admin) {
        // if user name or password is wrong
        if (!admin) {
            return res.json({ err: true, message: 'Wrong credential' })
        }
        if (!admin.comparePassword(req.body.password, admin.password)) {
            return res.send({ err: true, message: "Wrong password!" });
        }

        //user is found
        console.log('before cookie');
        req.session.admin = admin;
        req.session.save();
        res.status(200).json(admin);
    }).catch(error => {
        console.log(error);
        return res.status(422).json({ status: 'error', message: error })
    })
}

app.post('/api/admin/login', logValidation, login);


// Login checker
isLoggedIn = (req, res, next) => {
    if (req.session.admin) {
        res.status(200).json(req.session.admin);
    } else {
        res.send(false);
    }
}
app.get("/api/isloggedin", isLoggedIn);


///////////Session for current admin/////////////////////////////////////////////////////
app.get('/api/current_Admin', function (req, res) {
  if (req.session.admin) {
    Admin.findById(req.session.admin._id)
      .then(function (admin) {
        res.send({
          _id: admin._id,
          email: admin.email,
          firstName: admin.firstName,
        }).populate(admin)
      })
  } else {
    res.send({ error: 'not logged in' })
  }
});

////////////////////////////////////////////////////////////////////////////////////////
///Log Out
app.get('/api/admin/logout', function (req, res) {
  req.session.destroy();
  res.send({ message: 'session destroyed' })
});

///////////////////////////////////////////////////////////////////////////////////////////////
//Adding article and Validation

app.post('/api/Article/register',
    upload.fields([{ name: 'photo', maxCount: 1 }]), //multer files upload
    [
        check('title').not().isEmpty().withMessage('Title is required')
            .isLength({ min: 2 }).withMessage('Title should be at least 2 letters'),
        check('location')
            .not().isEmpty().withMessage('Location is required')
            .isLength({ min: 2 }).withMessage('Location should be at least 2 letters'),
        check('shortDescription')
            .not().isEmpty().withMessage('Description is required').isLength({ min: 10 }).withMessage('Minimum 10 characters are required'),
    ],
    function (req, res) {
        var errors = validationResult(req);
        console.log(errors.mapped());
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.mapped() });
        }

        filename = null
        if (req.files && req.files.photo && req.files.photo[0]) {
            filename = req.files.photo[0].filename
        }

        Article.create({
            title: req.body.title,
            location: req.body.location,
            Video: req.body.Video,
            profilePic: filename,
            ShortDescription: req.body.shortDescription,

        }).then(res.send(Article))
            .catch(function (error) {
                console.log(error);
                res.send(error);
            })
    }
)











}