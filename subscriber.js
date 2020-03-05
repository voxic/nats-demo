
/*
 * Project: nats-demo
 * File: subscriber.js
 * Author: Emil Nilsson
 * Contact: emil.nilsson@nutanix.com
 * Description: Simple console application to connect to the NATS.io demo server and subscribing to the "messages" topic.
 */

const NATS = require('nats') // Require the NATS module

// Create a connection to the NATS demo server
const nc = NATS.connect({
    url: "nats://demo.nats.io:4222"
});

// Subscribe to the "messages" topic
console.log('Subscribing to topic "messages"');
nc.subscribe("messages", (msg) => {
    console.log("Got message: " + msg);
});