const chalk = require('chalk');

exports.success = function(req, res, message, status){
	res.status(status).send({
		error: '',
		body: message
	});
}

exports.error = function(req, res, error, status, details){
  console.error(chalk.red('[response error] ' + details));
	res.status(status || 500).send({
		error: error,
		body: ''
  });
}
