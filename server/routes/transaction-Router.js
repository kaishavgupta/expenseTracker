import express from "express"
import { postTransaction, getTransactions, updateTransaction, deleteTransaction, logout,} from "../controller/transaction-controller.js"
import { authMiddleWare } from "../middlewares/auth-middleware.js"
import { transactionValid } from "../validators/trans-validators.js"
import { transValidate } from "../middlewares/validate-middlewares.js"


const router=express.Router()

router.route("/transaction/postData").post(transValidate(transactionValid),authMiddleWare,postTransaction)

router.route("/transaction/getData").get(authMiddleWare,getTransactions)

router.route("/transaction/updateData").patch(transValidate(transactionValid),authMiddleWare,updateTransaction)

router.route("/transaction/deleteData").patch(authMiddleWare,deleteTransaction)

router.route("/logout").get(logout)

export const transactinRoute =router