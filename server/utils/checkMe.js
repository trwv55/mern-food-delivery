import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = (req.headers.autorization || '').replace(/Bearer\s?/, '');

  res.send(token);
  next();
};
