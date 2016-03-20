# RESTful-web-service
CURD operation using HTTP API. This is web services about creating a Todo list by node related to typical create, read, update and delete operations. And it's also a RESTful web services.
###Using cURL commands to simulate HTTP requests. If you are using Windows OS, you need install cURL.   
 - The POST request: <pre>cURL -X POST -d "the data you post to server" http://localhost:[your port]</pre>
 - The GET request: <pre>cURL -X GET http://loclahost:[your port]</pre>
 - The DELETE request('id' is the numer of item you want to delete): <pre>cURL -X DELETE http://localhost:[your port]/id<pre>
 - The PUT request('id' is the numer of item you want to update): <pre>uCRL -X PUT -d "the content you want to update" http://loclahost:[your port]/id<pre>
