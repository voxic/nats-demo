# Simple demo of NATS.io

A simple node.js console application to test NATS.io

## subscriber.js

Description: Simple console application to connect to the NATS.io demo server and subscribing to the "messages" topic.

## publisher.js

Description: Simple console application to connect to the NATS.io demo server and publishing to the "messages" topic every second.

## To run the applications

Open your terminal and change in to the source directory.

Install dependencies

```bash
npm install
```

Run the subscriber

```bash
node subcriber.js
```

Run the publisher.js in a separate terminal window

```bash
node publisher.js
```
