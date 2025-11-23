import { UserTransaction } from "../model/transaction-model.js";

export const postTransaction = async (req, res) => {
  if (!req.userID) {
    return res.status(404).json({
      message: "Error: Register/Login",
      extraDetails:
        "Error in token transactionForm while checking registration",
    });
  }

  try {
    const UserEmail = req.UserEmail;
    const { title, amount, type } = req.body.transaction[0];
    const findUser = await UserTransaction.findOne({ email: UserEmail });

    const newTx = {
      _id: Date.now(),
      title,
      amount,
      type,
    };

    if (findUser) {
      await UserTransaction.updateOne(
        { email: UserEmail },
        { $push: { transaction: newTx } }
      );

      return res.status(200).json({ msg: newTx });
    }

    await UserTransaction.create({
      email: UserEmail,
      transaction: [
       newTx
      ],
    });

    return res.status(200).json({ msg: newTx });
  } catch (error) {
    return res.status(500).json({ msg: `Error saving transaction ${error}` });
  }
};

export const getTransactions = async (req, res, next) => {
  if (!req.userID) {
    return res.status(404).json({
      message: "Error: Register/Login",
      extraDetails:
        "Error in token transactionForm while checking registration",
    });
  }

  const UserEmail = req.UserEmail;
  const findUser = await UserTransaction.findOne({ email: UserEmail });
  if (findUser) {
    const transaction = findUser.transaction;
    res.status(200).json({ transaction });
  } else {
  }
};

export const updateTransaction = async (req, res, next) => {
  try {
    const { _id, title, amount, type } = req.body;
    if (!req.userID) {
      return res.status(404).json({
        message: "Error: Register/Login",
        extraDetails:
          "Error in token transactionForm while checking registration",
      });
    }

    const UserEmail = req.UserEmail;
    const findUser = await UserTransaction.findOne({ email: UserEmail });
    if (findUser) {
      await UserTransaction.updateOne(
        { email: UserEmail, "transaction._id": _id },
        {
          $set: {
            "transaction.$.title": title,
            "transaction.$.amount": amount,
            "transaction.$.type": type,
          },
        }
      );
      return res.status(200).json({ msg: "Transaction updated" });
    }
  } catch (error) {
    res.status(500).json({ msg: `Error updating transaction: ${error}` });
  }
};

export const deleteTransaction = async (req, res, next) => {
  try {    
    const { _id } = req.body;
    if (!req.userID) {
      return res.status(404).json({
        message: "Error: Register/Login",
        extraDetails:
          "Error in token transactionForm while checking registration",
      });
    }

    const UserEmail = req.UserEmail;
    const findUser = await UserTransaction.findOne({ email: UserEmail });
    if (findUser) {
      await UserTransaction.updateOne(
        { email: UserEmail, "transaction._id": _id },
        {
          $pull: {
            transaction: { _id: _id },
          },
        }
      );
    }
    return res.status(200).json({ msg: "Transaction Deleted" });
  } catch (error) {
    res.status(500).json({ msg: `Error Delet transaction: ${error}` });
  }
};


export const logout=async(req,res)=>{
   res.clearCookie("uid", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
   return res.status(200).json({ msg: "Logged out" });
}