const errorMiddelware = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    success: false,
    message: "Somthing went wrong",
    err,
  });
};

export default errorMiddelware;
