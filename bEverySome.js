function checkUsersValid(goodUsers) {

  return function allUsersValid(submittedUsers) {

    return submittedUsers.every(function(sUser) {

      return goodUsers.some(function(goodUser) {

        return sUser.id === goodUser.id;

      });

    });

  };

}

module.exports = checkUsersValid