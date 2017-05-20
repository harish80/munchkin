export default function (state ={} , action) {
    switch (action.type) {
     case 'EMAIL':
                return Object.assign({}, state, {
                    email: action.text
                });                
             break;
     case 'PASSWORD':
                return Object.assign({}, state, {
                    password: action.text
                });
             break;
     case 'SHOW_LOGIN':
                return Object.assign({}, state, {
                    show: action.text
                });
             break;
  }
    return state;
}
