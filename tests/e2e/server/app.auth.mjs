import request from 'superagent';
import { key, cert } from './app.certs.mjs';
import { AM_URL, REALM_PATH } from './env.config.copy.mjs';

export let session;

export async function authorizeApp({ un, pw }) {
  const response = await request
    .post(`${AM_URL}/json/realms/${REALM_PATH}/authenticate`)
    .key(key)
    .cert(cert)
    .set('Content-Type', 'application/json')
    .set('Accept-API-Version', 'resource=2.0, protocol=1.0')
    .set('X-OpenAM-Username', un)
    .set('X-OpenAM-Password', pw)
    .send({});

  session = response.body;

  console.log(`REST app identity token: ${session.tokenId}`);

  return session;
}
