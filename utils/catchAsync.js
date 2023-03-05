module.exports = fn => {
  return (req, res, next) => {
    // console.log(req.body);
    fn(req, res, next).catch(next); // same .catch(err => next(err))
  };
};
