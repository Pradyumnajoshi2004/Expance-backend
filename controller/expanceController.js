const Expance = require("../model/expanceModel")

exports.getExpance = async (req,res) => {
    try {
        const data = await Expance.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postExpance = async (req,res) => {
    try {
        const data = await Expance.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteExpance = async (req,res) => {
    try {
        const data = await Expance.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}