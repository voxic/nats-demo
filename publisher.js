/*
 * Project: nats-demo
 * File: publisher.js
 * Author: Emil Nilsson
 * Contact: emil.nilsson@nutanix.com
 * Description: Simple console application to connect to the NATS.io demo server and publishing to the "messages" topic every second.
 */

const NATS = require('nats') // Require the NATS module
const nc = NATS.connect({url: "nats://demo.nats.io:4222"}); // Connect to the NATS demo server

setInterval(()=>{
    console.log("Send message: All is well")
    nc.publish('messages', "All is Well");
}, 1000)
