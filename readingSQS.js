const AWS = require('aws-sdk');
const AWS_REGION = 'eu-west-2';
const SQS_URI =
  'https://sqs.eu-west-2.amazonaws.com/242212801364/TestingLoriotIncomingData';
const API_VERSION = '2012-11-05';

AWS.config.update({ region: AWS_REGION }); //Mumbai

const sqs = new AWS.SQS({ apiVersion: API_VERSION });

let readSqsData = () => {
  const params = {
    MaxNumberOfMessages: 1,
    QueueUrl: SQS_URI,
  };

  sqs.receiveMessage(params, queueResult);
};
const deleteParams = {
  QueueUrl: SQS_URI,
};
const queueResult = (err, data) => {
  if (err) {
    console.log('Received Error', err);
  } else if (data.Messages) {
    console.log(`Length of data recived ${data.Messages.length}`);
    data.Messages.forEach(dataManipulation);
  }
};

const dataManipulation = (queue) => {
  const msgBody = queue.Body;
  console.log(msgBody);
};

const deleteSqsQueueMsg = (msg) => {
  deleteParams.ReceiptHandle = msg.ReceiptHandle;
  sqs.deleteMessage(deleteParams, deleteOps);
};

const deleteOps = (err, data) => {
  if (err) {
    console.log('Delete Error', err);
  } else {
    console.log('Message Deleted', data);
  }
};
readSqsData();
