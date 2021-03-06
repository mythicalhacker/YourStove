var express = require('express');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser'); 
var multer = require('multer');

var app = express();

app.use(express.static('/'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = http.createServer(app).listen(8124);

app.get('/get_all_blogs', cors(), function(req, res) {
    var getAllBlogs = require('./server/get_all_blogs');
    getAllBlogs.result(req, res);
});


app.get('/get_all_eat_outs', function(req, res) {
    var getAllEatOuts = require('./server/get_all_eat_outs');
    getAllEatOuts.result(req, res);
});

app.get('/get_all_quick_cooks', function(req, res) {
    var getAllQuickCooks = require('./server/get_all_quick_cooks');
    getAllQuickCooks.result(req, res);
});

/* -- Admin specific -- */
/* -- Method POST --*/
/* -- Will check for admin details also -- */

app.post('/check_admin', function(req, res) {
    var checkAdmin = require('./server/check_admin');
    checkAdmin.result(req, res);
});

app.post('/add_blog', multer().fields([
    { name: 'title' },
    { name: 'type' },
    { name: 'shortDescription' },
    { name: 'label' },
    { name: 'category' },
    { name: 'article' },
    { name: 'profilePic', maxCount: 1 }, 
    { name: 'coverPic', maxCount: 1 }
]), function(req, res) {
    var addBlog = require('./server/add_blog');
    addBlog.result(req, res);
});
/*
app.get('/modify_blog', function(req, res) {
    var modifyBlog = require('./server/modify_blog');
    modifyBlog.result(req, res);
});
*/
