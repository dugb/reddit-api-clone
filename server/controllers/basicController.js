const basicController = {}

basicController.get = (req, res) => {
  res.json({
    message: "Welcome to our api"
  });
};

export default basicController;
