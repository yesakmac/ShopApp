/**
 * Created by KJ79607 on 10/30/2014.
 */
var mongoose = require('mongoose'),
    task = require('../models/task.js');

module.exports = TaskList;

function TaskList(connection) {
    mongoose.connect(connection);
}

TaskList.prototype = {
    showTasks: function(req, res) {
        task.find({itemCompleted: true}, function foundTasks(err, items) {
            //console.log(items)
            res.render('complete',{title: 'Shop ToDo List ', tasks: items})
        });
    }
};
