// // import { noise } from '@chainsafe/libp2p-noise'
// // import { yamux } from '@chainsafe/libp2p-yamux'
// // import { mdns } from '@libp2p/mdns'
// // import { tcp } from '@libp2p/tcp'
// // import { webSockets } from '@libp2p/websockets'
// // import defaultsDeep from '@nodeutils/defaults-deep'
// // import { createLibp2p as create } from 'libp2p'

// import { noise } from '@chainsafe/libp2p-noise'
// import { yamux } from '@chainsafe/libp2p-yamux'
// import { mdns } from '@libp2p/mdns'
// import { tcp } from '@libp2p/tcp'
// import { webSockets } from '@libp2p/websockets'
// import defaultsDeep from '@nodeutils/defaults-deep'
// import { createLibp2p as create } from 'libp2p'

// export async function createLibp2p (_options) {
//     const defaults = {
//         transports: [
//           tcp(),
//           webSockets(),
//         //   circuitRelayTransport()
//         ],
//         streamMuxers: [
//           yamux()
//         ],
//         connectionEncrypters: [
//           noise()
//         ],
//         peerDiscovery: [
//           mdns()
//         ],
//         // services: {
//         // identify: identify(),
//         // // relay: circuitRelayServer()
//         // }
//       }
    
//       return create(defaultsDeep(_options, defaults))
// }


import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { mdns } from '@libp2p/mdns'
import { tcp } from '@libp2p/tcp'
import { webSockets } from '@libp2p/websockets'
import defaultsDeep from '@nodeutils/defaults-deep'
import { createLibp2p as create } from 'libp2p'
import { circuitRelayServer, circuitRelayTransport } from '@libp2p/circuit-relay-v2'

export async function createLibp2p (_options) {
  const defaults = {
    transports: [
      tcp(),
      webSockets(),


    ],
    streamMuxers: [
      yamux()
    ],
    connectionEncrypters: [
      noise()
    ],
    peerDiscovery: [
      mdns()
    ],
    // services: {
    //   identify: identify()
    // }
  }

  return create(defaultsDeep(_options, defaults))
}