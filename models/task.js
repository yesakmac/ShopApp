/**
 * Created by KJ79607 on 10/30/2014.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
    itemName      : String,
    itemCategory  : String,
    itemPriority  : String,
    itemCompleted : { type: Boolean, default: false },
    itemDate      : { type: Date, default: Date.now },
    itemDateCompleted : {type: Date}

});
module.exports = mongoose.model('TaskModel', TaskSchema);