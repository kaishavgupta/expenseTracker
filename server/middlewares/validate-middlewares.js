export const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    console.log(err.issues[0].message);

    const error = {
      status: 404,
      message: "Fill the input properly",
      extraDetails: err.issues[0].message,
    };
    next(error);
  }
};

export const transValidate = (schema) => async (req, res, next) => {
  try {
    if (req.body.transaction && Array.isArray(req.body.transaction)) {
      req.body.transaction = req.body.transaction.map((t) => ({
        ...t,
        amount: Number(t.amount),
      }));
    }

    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    console.log("Error while posting/updating data",err.issues[0].message);

    const error = {
      status: 404,
      message: "Fill the input properly",
      extraDetails: err.issues[0].message,
    };
    next(error);
  }
};
