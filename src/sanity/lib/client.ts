import { createClient , type QueryParams} from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export async function sanityFetch<T>({
query,
  params = {},
  revalidate = 60,
  tags = [],
}:{
  query:string;
  params?:QueryParams;
  revalidate?:number| false;
  tags?:string[];}):Promise<T>{
  return client.fetch(query, params, {
next:{
revalidate:tags.length?false:revalidate,
tags,
},
});
}
