

import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { circuitRelayServer } from '@libp2p/circuit-relay-v2'
import { identify } from '@libp2p/identify'
import { webSockets } from '@libp2p/websockets'
import { createLibp2p } from 'libp2p'
import { mdns } from '@libp2p/mdns'
import { tcp } from '@libp2p/tcp'

async function main () {
  const node = await createLibp2p({
    addresses: {
      listen: ['/ip4/0.0.0.0/tcp/0/ws']
      // TODO check "What is next?" section
      // announce: ['/dns4/auto-relay.libp2p.io/tcp/443/wss/p2p/QmWDn2LY8nannvSWJzruUYoLZ4vV83vfCBwd8DipvdgQc3']
    },
    transports: [
      webSockets(),
      tcp()
    ],
    connectionEncrypters: [
      noise()
    ],
    streamMuxers: [
      yamux()
    ],
    
    services: {
      identify: identify(),
      relay: circuitRelayServer()
    }
  })

  console.log(`Node started with id\t${node.peerId.toString()}\n`)
  console.log('Listening on:\t')
  node.getMultiaddrs().forEach((ma) => console.log(ma.toString()))
}

main()