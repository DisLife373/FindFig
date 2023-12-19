const express = require('express');
const router = express.Router();
const UserModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET ="sadfghjkl;liuytredfghjklkjhgfxcvbnm,wesrdtfyguhijoklpjhjgfdghjkl"



router.route("/register").post(async(req, res) => {
    const {username, email, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    try{
        const oldUser = await UserModel.findOne({email});
        if(oldUser){
            return res.json({err:"user existed"});
        }
        await UserModel.create({
            username,
            email,
            password: encryptedPassword,
            
        });
        res.send({status:"ok"});
    }catch(err){
        res.send({status:"error"});
    }


});

router.route("/login-user").post(async(req,res)=>{
    const{email,password}= req.body;
    
   const user = await UserModel.findOne({email});
    if(!user){
        return res.json({err:"user not found"});
    }
    if(await bcrypt.compare(password, user.password)){
        const token =jwt.sign({email:user.email},JWT_SECRET);
        if(res.status(201)){
            return res.json({status:"ok",data: token});
        }else{
            return res.json({err:"error"});
        }
    }
    res.json({status:"error",error:"Invalid password"});
});
router.route("/userData").post(async(req,res)=>{
    const {token} = req.body;
    try{
        const user = jwt.verify(token,JWT_SECRET);
        console.log(user);
        const useremail = user.email;
        UserModel.findOne({email:useremail})
        .then((data)=>{
            res.send({status:'ok', data:data});
        })
        .catch((err)=>{
            res.send({status:'error',data:err})
        })
    }catch(err){

    }
});


router.route("/finduser").get((req,res)=>{
    UserModel.find()
    .then(users=> {
        console.log(users)
        res.json(users)
    })
    .catch(err=> res.json(err))
})

router.route("/addAddress").post(async (req, res) => {
    const {email, receiverName, tel, address} = req.body;
    try {
        await UserModel.updateOne({email: email}, {
            $addToSet: { 
                "UserAddresses": {
                    receiverName: receiverName, 
                    tel: tel, 
                    address: address, 
                }
            }
        }, {upsert: true});
        return res.json({status: "ok", data: "updated"});
    } catch (error) {
        return res.json({status: "error", data: error});
    }
});

router.route("/editAddress").post(async (req, res) => {
    const {email, receiverName, tel, address} = req.body;
    console.log(email);
    try {
        await UserModel.updateOne({email: email}, {
            "UserAddresses": {
                receiverName: receiverName, 
                tel: tel, 
                address: address, 
            }
        });
        return res.json({status: "ok", data: "updated"});
    } catch (error) {
        return res.json({status: "error", data: error});
    }
});

router.route("/getUserForAddress").post(async (req, res) => {
    const {email} = req.body;
    UserModel.findOne({email: email})
    .then(user=> {
        res.json(user)
    })
    .catch(err=> res.json(err))
});

router.route("/deleteAccount").post(async (req, res) => {
    const {email} = req.body;
    UserModel.deleteOne({email: email})
    .then(() => {
        res.send("Delete Complete")
    })
    .catch(err=> res.send(err))
});

router.route("/updateUser").post(async (req, res) => {
    const { email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    try {
        await UserModel.updateOne({email: email}, {
            password: encryptedPassword, 
        });
        return res.json({status: "ok", data: "updated"});
    } catch (error) {
        return res.json({status: "error", data: error});
    }
});


module.exports = router;