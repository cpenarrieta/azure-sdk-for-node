// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadls155/providers/Microsoft.DataLakeStore/accounts/xplattestadls3899?api-version=2015-10-01-preview', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name is belong to another owner.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '93',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'f10a65b8-522b-4a5e-a793-8fe10167a64b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3c716144-8e85-49e4-b68c-0fa5668c3145',
  'x-ms-routing-request-id': 'WESTUS:20160307T224055Z:3c716144-8e85-49e4-b68c-0fa5668c3145',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:40:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadls155/providers/Microsoft.DataLakeStore/accounts/xplattestadls3899?api-version=2015-10-01-preview', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name is belong to another owner.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '93',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'f10a65b8-522b-4a5e-a793-8fe10167a64b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3c716144-8e85-49e4-b68c-0fa5668c3145',
  'x-ms-routing-request-id': 'WESTUS:20160307T224055Z:3c716144-8e85-49e4-b68c-0fa5668c3145',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:40:54 GMT',
  connection: 'close' });
 return result; }]];