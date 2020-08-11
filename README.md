# ExpressJS Hello World Web Hook Listener

From:
* https://expressjs.com/en/starter/hello-world.html
* https://help.sonatype.com/repomanager3/webhooks/working-with-hmac-payloads

Steps:
1. `npm init`
2. `npm install express --save`
3. Copy the code to `index.js`
4. `node index.js` (or `npm start`, since i added the alias to `package.json`)
5. http://localhost:2000
6. `curl --request POST 'http://localhost:2000' --header 'Content-Type: application/json' --header 'Cookie: TOKEN=4018cf99-80fa-48e4-81f8-ef3e8f388883; JSESSIONID=0166312E85789759763B0CE91E085CA8' --data-raw '{"field1": "value1","field2": "value2","object": {"sub1": "sv1","sub2": "sv2"}}'`

# Building with Docker

1. docker build -t simple-npm-express-webhook-listener .
2. docker run -p 5000:80 simple-npm-express-webhook-listener

# Working with IQ Server

From:
* https://help.sonatype.com/repomanager3/formats/npm-registry

"Develop" Steps (npm audit):
1. Add APP_ID and postshrinkwrap script to package.json
2. add app_id.sh
3. npm install
4. npm audit

"Build" Steps (auditjs):
1. auditjs iq -a simple-npm-express-webhook-listener -s build -h http://host.docker.internal:8060/iq -u admin -p <password> .

# Tips

* nodemon & browser-sync - https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/