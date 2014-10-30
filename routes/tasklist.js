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
        task.find({itemCompleted: false}, function foundTasks(err, items) {
            //console.log(items)
            res.render('index',{title: 'Shop ToDo List ', tasks: items})
        });
    },

    addTask: function(req,res) {
        //console.log(req.body)
        var item = req.body;
        //console.log(item.name + ' is item name')
        newTask = new task();
        newTask.itemName = item.name;
        newTask.itemCategory = item.category;
        newTask.itemPriority = item.priority;
        newTask.save(function savedTask(err){
            if(err) {
                throw err;
            }
        });
        res.redirect('/');
    },

    completeTask: function(req,res) {
        var completedTasks = req.body;
        for(taskId in completedTasks) {
            if(completedTasks[taskId]=='true') {
                var conditions = { _id: taskId };
                console.log(taskId);
                var updates = { itemCompleted: completedTasks[taskId], itemDateCompleted: Date.now() };
                console.log(updates)
                task.update(conditions, updates, function updatedTask(err) {
                    if(err) {
                        throw err;
                    }
                });
            }
        }
        res.redirect('/');
    },

    showCompleteTasks: function(req, res) {
        task.find({itemCompleted: true}, function foundTasks(err, completeItems) {
            console.log(task.find({itemCompleted: true}))
            //console.log('I am in the showCompletedTasks')
            res.render('complete',{title: 'Shop ToDo List ', tasks: completeItems})
        });
    }
}