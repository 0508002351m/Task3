const Cust = require("./controllers/customers")
const yargs = require ("yargs")
const Account_Number = Date.now()
yargs.command({
    command:"addCust", 
    builder:{

        name:{
            type:String,
            required:true
        },
        initialBalance:{
            type:Number,
            required:true
        }},
    handler:function(argv) {
     let user = {
         name:argv.name,
         initialBalance:argv.initialBalance,
         remainingBalance:argv.initialBalance,
         Account_Number
     }
     Cust.addCust(user)
    }
})

// yargs.command({
//     command:"showAll",
//     handler:function() {
//         Cust.showAll()
//     }
// })


yargs.command({
    command:"showuser",
    builder:{
        id:{
            required:true,
            type:Number
        }
    },
    handler:function(argv) {
    Cust.showSingle(argv.id)
    }
})
// yargs.command({
//     command:"delete",
//     builder:{
//         id:{
//             required:true,
//             type:Number
//         }
//     },
//     handler:function(argv) {
//         Cust.deleteCust(argv.id)
//     }
// })

// yargs.command({
//     command:"edit",
//     builder:{
//         id:{
//             required:true,
//             type:Number
//         },
//         name:{
//             type:String,

//         },
//         initialBalance:{
//             type:Number,
//             required:true
//         }},
//     handler:function(argv) {
//         let user = {
//             name:argv.name,
//             initialBalance:argv.initialBalance,
//             Account_Number
//     }

//             Cust.edit(argv.id,user)
//     }
// })

yargs.command({
command:"op",
builder:{
    id:{
        required:true,
        type:Number
    },
    operationtype:{
        type:String,
        required:true
    },
    value:{
        type:Number,
        required:true
    },
},
handler:function(argv) {

 Cust.op(argv.id,argv.operationtype,argv.value)
 
}
})

yargs.argv

