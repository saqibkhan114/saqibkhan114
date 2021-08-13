import userConstants from './user.constants'
import * as userService from './user.service'


export function login(username, password, from) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
       
      },
      (error) => {
        dispatch(failure(error.toString()));

      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}