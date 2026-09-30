function notFound(req, res) {
  return res.status(404).json({ success: false, message: 'Route not found' });
}

function errorHandler(err, req, res, next) {
  console.error(err.stack || err.message || err);
  if (res.headersSent) return next(err);
  return res.status(500).json({ success: false, message: 'Internal server error' });
}

module.exports = { notFound, errorHandler };
