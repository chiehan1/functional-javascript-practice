function getShortMessages(messages) {
  return messages.map(function(messageObj) {
    if (messageObj.message.length < 50) {
      return messageObj.message;
    }
    else {
      return;
    }
  }).filter(function(isStr) {
    return 'string' === typeof isStr;
  });
}

module.exports = getShortMessages;

/*
module.exports = function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}
*/