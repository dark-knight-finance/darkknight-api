import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://thegraph.com/hosted-service/subgraph/shahzeb8285/dark-knight-two'
  }),
  
  cache: new InMemoryCache()
})
