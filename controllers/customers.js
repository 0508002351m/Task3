const dealing = require("./dealing")


const addCust = (customerData) =>{
   try {
    if (customerData.name<3) throw new Error("invalid name")
    const Cust = dealing.read()
    Cust.push(customerData)
    dealing.write(Cust)
   } catch (error) {
       console.log(error.message)
   }
}


// const showAll = () =>{try {
    
// } catch (error) {
    
// }
//  const show = dealing.read()
//  console.log(show)
// }

const showSingle = (custAcN) =>{
const single = dealing.read()
const cust = single.find(u=>u.Account_Number==custAcN )
if (cust) console.log(cust)
else console.log("User  not found")
}

// const deleteCust = (custAcN) =>{
//     const cust = dealing.read()
//     const filtered = cust.filter(u=>u.Account_Number !=custAcN)
//     if(cust.length==filtered.length) return console.log("user not found")
//     dealing.write(filtered)
//     console.log("user deleted")
// }

const edit = (custAcN,newData) =>{
const cust = dealing.read()
const i = cust.findIndex(u=>u.Account_Number=custAcN)
// console.log(cust[i])
cust[i]=newData
dealing.write(cust)
// console.log(cust[i])
console.log("data edited")

}

const op = (custAcN,type,value) => {
const users = dealing.read()  
const i = users.findIndex(u=>u.Account_Number==custAcN)

if (type == "withdraw") {
    if (users[i]["remainingBalance"]<value) return console.log(" your balance is not enough")
    users[i]["remainingBalance"] == Number(users[i]["remainingBalance"])-value
 }
 else if (type == "add") {
      users[i]["remainingBalance"] == Number(users[i]["remainingBalance"])+value
 }
 dealing.writeData(users)
 console.log(dealing.readData())}

// Number(cust[i][remainingBalance])==Number(cust[i][remainingBalance] +value)

// else if(type=="withdraw") cust[i][remainingBalance]==cust[i][remainingBalance]-value  && dealing.write(user) && console.log("Succeed")

// else console.log("invalid operation")
// }

module.exports={addCust,showSingle,edit,op}
