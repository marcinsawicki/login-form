const Auth = (email, password) => {

  return new Promise((resolve, reject) => {

    const emailVerifyFilter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    const passwordVerifyFilter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    let obj = {};

    if ( !emailVerifyFilter.test(email) ) {
      obj = {
        error: true,
        msg: 'invalid email'
      }
      reject(obj);
    }

    if ( !passwordVerifyFilter.test(password) ) {
      obj = {
        error: true,
        msg: 'invalid password'
      }
      reject(obj);
    }

    if ( email !== 'test@test.pl' || password !== 'Password1' ) {
      obj = {
        error: true,
        msg: 'invalid email or password'
      }
      reject(obj);
    }

    obj = {
      error: false,
      msg: 'login successful'
    }
    resolve(obj);

  });

}

export default Auth;
