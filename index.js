var express = require('express');
var app = express();
const path = require('path');
const http=require('http').Server(app);

//websocket
/*
const io=require('socket.io')(http);
io.on('connection', socket => {
  console.log('A user connected...');
  socket.on('disconnect', () => {
    console.log('A user disconnected...');
  })

  socket.emit('server', "server: message from server");
});
//

//Kafka
const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})
const consumer = kafka.consumer({ groupId: 'group' })
const main = async () =>
{
  await consumer.connect()
  await consumer.subscribe({ topics: ['topic1'] })
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      io.emit("server", message.value.toString());
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

main().catch(async error => {
  console.error(error)
  try {
    await consumer.disconnect()
  } catch (e) {
    console.error('Failed to gracefully disconnect consumer', e)
  }
  process.exit(1)
})
//
*/

app.get('/', (req, res) => {
    res.sendFile('/home/lucas/Desktop/server/index.html');
});

app.get('/dispositivo/:id', (req, res) => {

});

app.use(express.static(__dirname));

http.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});