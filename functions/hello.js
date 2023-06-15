//domain/.netlify/functions/hello
const items = [{ id: 1, name: 'peter' }]

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'Hello world',
  }
}
