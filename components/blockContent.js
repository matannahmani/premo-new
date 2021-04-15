import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>
          
         // ...
        
        default:
          return <p style={{margin: 8}}>{props.children}</p>
      }
    },
    image (props) {
        return (
        <>
            {props.node.asset !== null &&
            <div style={{display: 'flex',justifyContent: props.node.pos}}>
            <img style={{objectFit: 'contain',objectPosition: 'center',width: `${props.node.size}%`}} src={props.node.asset.url}/> 
            </div>
            }
        </>
        )
    }
  },
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent