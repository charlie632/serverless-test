# Serverless Test

- lambda1 needs to invoke lambda2 but it times out

- Install using npm or yarn

- Run `yarn dev`

- Servesless offline is now online

## Reproduction

- Make a GET request to `http://localhost:3000/lambda1`.

- Lambda1 should be invoked and should invoke Lambda2

- Lambda1 Timesout

## Expected behaviour

- Make a GET request to `http://localhost:3000/lambda1`.

- Lambda1 should be invoked and should invoke Lambda2

- Lambda1 Responds
