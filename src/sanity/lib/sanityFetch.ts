import { client } from './client';
import { ClientPerspective, QueryParams } from 'next-sanity';

export async function sanityFetch<const QueryString extends string>({
  query, params = {},
}: {
  query: QueryString,
  params?: QueryParams | Promise<QueryParams>;
}) {
  return client.fetch(query, await params, {
    next: { revalidate: 60 },
    useCdn: true
  });

}
