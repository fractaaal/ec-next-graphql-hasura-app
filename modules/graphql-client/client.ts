import { GraphQLClient } from 'graphql-request'
import { GraphQLEndpoint } from '../config/configValues'
import { HasuraAdminSecret } from '../config/configValues'
import { getSdk } from '../../generated/graphql-request'

// react-query (use for CSR)
export const client = new GraphQLClient(GraphQLEndpoint, {
  headers: {
    'X-Hasura-Admin-Secret': HasuraAdminSecret,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// graphql-request (use for SSR)
export const sdk = getSdk(client)
export type GraphQLSDK = typeof sdk
