const getHomePage = (req, res) => {
  //process data
  //call model

  res.send('Hello World new start!');
};

const getABC = (req, res) => {
  res.send('Hello World abc!');
};

const getHoiDanIt = (req, res) => {
  res.render('sample.ejs');
};

module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
};
