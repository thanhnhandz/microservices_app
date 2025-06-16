const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret';

function requireAuth(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/login'); // or res.status(401).send('Unauthorized');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user; // optionally store user info in req
    next();
  } catch (err) {
    res.clearCookie('token');
    return res.redirect('/login');
  }
}

module.exports = requireAuth;