// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg303?api-version=2014-04-01-preview', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg303\",\"name\":\"testg303\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c5cefef1-e0fa-4f97-ad3b-1e30bee888c6',
  'x-ms-correlation-request-id': 'c5cefef1-e0fa-4f97-ad3b-1e30bee888c6',
  'x-ms-routing-request-id': 'WESTUS:20151114T080932Z:c5cefef1-e0fa-4f97-ad3b-1e30bee888c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 08:09:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg303?api-version=2014-04-01-preview', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg303\",\"name\":\"testg303\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c5cefef1-e0fa-4f97-ad3b-1e30bee888c6',
  'x-ms-correlation-request-id': 'c5cefef1-e0fa-4f97-ad3b-1e30bee888c6',
  'x-ms-routing-request-id': 'WESTUS:20151114T080932Z:c5cefef1-e0fa-4f97-ad3b-1e30bee888c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 08:09:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg303/providers/Microsoft.Resources/deployments/testdep1/validate?api-version=2014-04-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidRequestContent\",\"message\":\"The request content was invalid and could not be deserialized: 'Required property 'properties' not found in JSON. Path '', line 1, position 2.'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8a15cbb6-cf3b-4fea-8413-65f329c4a827',
  'x-ms-correlation-request-id': '8a15cbb6-cf3b-4fea-8413-65f329c4a827',
  'x-ms-routing-request-id': 'WESTUS:20151114T080934Z:8a15cbb6-cf3b-4fea-8413-65f329c4a827',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 08:09:33 GMT',
  connection: 'close',
  'content-length': '199' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg303/providers/Microsoft.Resources/deployments/testdep1/validate?api-version=2014-04-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidRequestContent\",\"message\":\"The request content was invalid and could not be deserialized: 'Required property 'properties' not found in JSON. Path '', line 1, position 2.'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8a15cbb6-cf3b-4fea-8413-65f329c4a827',
  'x-ms-correlation-request-id': '8a15cbb6-cf3b-4fea-8413-65f329c4a827',
  'x-ms-routing-request-id': 'WESTUS:20151114T080934Z:8a15cbb6-cf3b-4fea-8413-65f329c4a827',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 08:09:33 GMT',
  connection: 'close',
  'content-length': '199' });
 return result; }]];