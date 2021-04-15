import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-03-25', // use a UTC date string
    token: '', // or leave blank for unauthenticated usage
    useCdn: process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

const client = sanityClient({...options})

export const imageBuilder = sanityImage(client)

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export default client
