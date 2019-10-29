import * as AWS from 'aws-sdk'

AWS.config.region = 'us-east-1';

const lambda = new AWS.Lambda({
  // @ts-ignore
  endpoint: new AWS.Endpoint('http://localhost:4000'),
  region: 'us-east-1',
});


export const lambda1 = async (event, context) => {
  await lambda
    .invoke({
      FunctionName: 'lambda2',
      InvocationType: 'Event',
      Payload: JSON.stringify({ key: 'value' }),
    })
    .promise();
  return { statusCode: 200, body: JSON.stringify( { data: "lambda 1 finished"})}


}


export const lambda2 = async (event, _context) => {
  console.log('Lambda 2 invoked')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: 'lambda 2 finished'
      },
      null,
      2,
    ),
  };
};
