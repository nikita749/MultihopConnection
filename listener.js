/* eslint-disable no-console */



import { createLibp2p } from './libp2p.js'
import { stdinToStream, streamToConsole } from './stream.js'

async function run () {
  // Create a new libp2p node with the given multi-address


  const listener = await createLibp2p({
    addresses: {
      listen: ['/ip4/0.0.0.0/tcp/10333/ws']
    }
  })

  // Log a message when a remote peer connects to us
  listener.addEventListener('peer:connect', (evt) => {
    const remotePeer = evt.detail
    console.log('connected to: ', remotePeer.toString())
  })

  // Handle messages for the protocol
  await listener.handle('/chat/1.0.0', async ({ stream }) => {
    // Send stdin to the stream
    stdinToStream(stream)
    // Read the stream and output to console
    streamToConsole(stream)
  })

  // Output listen addresses to the console
  console.log('Listener ready, listening on:')
  listener.getMultiaddrs().forEach((ma) => {
    console.log(ma.toString())
  })


}

run()




//   console.log(`Node started with id\t${node.peerId.toString()}\n`)

//   const conn = await node.dial(multiaddr(relayAddr))

//   console.log(`Connected to the relay\t${conn.remotePeer.toString()}\n`)

//   // Wait for connection and relay to be bind for the example purpose
//   node.addEventListener('self:peer:update', (evt) => {
//     // Updated self multiaddrs?
//     console.log(`Advertising with a relay address of\t${node.getMultiaddrs()[0].toString()}\n`)
//   })


// main()

