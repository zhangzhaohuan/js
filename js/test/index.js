require("./babel-polyfill");
var requset = require('./request.js');
var post = request.post;
async function queryIsContractAddress(params) {
  var url = '/mainnet/v3/06f4ff56379b4a698633ee05f5ff138e';
  var rs = await post(url, params);
  return rs || {};
}
await queryIsContractAddress({
  jsonrpc: '2.0',
  method: 'eth_getCode',
  params: [this.state.toAddredss, 'latest'],
  id: 1
});
