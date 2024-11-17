cd /code/front-src
rm -f deno.lock
npm run build
npm start&
service nginx start
echo started