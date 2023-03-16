const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Expense = new Schema({
    id: Long,
    date: Date,
    description: String,
    category: String,
    amount: Double,
})

export default mongoose.model('Expense', Expense);