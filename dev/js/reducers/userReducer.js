export default function (state={} , action) {
    switch (action.type) {
     case 'SHOW_USER':
                return Object.assign({}, state, {
                    show: action.text
                });
             break;
  }
    return state;
}
