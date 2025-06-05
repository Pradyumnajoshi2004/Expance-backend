const Expance = require("../model/expanceModel")

exports.getExpance = async (req,res) => {
    try {
        const data = await Expance.find().populate("user_id")
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

exports.updateExpance = async (req,res) => {
    try {
        const data = await Expance.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.expanceFindById = async (req,res) => {
    try {
        const data = await Expance.findById(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

