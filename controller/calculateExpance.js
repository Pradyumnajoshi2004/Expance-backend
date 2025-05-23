const Expance = require("../model/expanceModel")

exports.calculateExpance = async (req,res) => {
    try {
        
        const incomeRecords  = await Expance.find({type : "income"})
        console.log(incomeRecords);
        
        const expenseRecords = await Expance.find({type:"expense"})
        console.log(expenseRecords);
        
        const totalIncome = incomeRecords.reduce((sum,record)=>sum+=record.price,0)
        const totalExpance = expenseRecords.reduce((sum,record)=>sum+=record.price,0)

        const surplus =  totalIncome - totalExpance
        

        return res.json({errors:false,data:{surplus,totalIncome,totalExpance}})

    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}