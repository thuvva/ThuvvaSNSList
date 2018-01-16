let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	sns.listSubscriptionsByTopic({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:MOCK12'
	}).promise()
		.then(data => {
			console.log(data);
			callback(null,data);
			// your code goes here
		})
		.catch(err => {
			console.log(err);
			callback(null,err);
			// error handling goes here
		});

	//callback(null, 'Successfully executed');
}