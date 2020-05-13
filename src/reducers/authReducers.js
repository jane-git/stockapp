//로그인하고 저장되는 공간
const initialState = {
    isAuthenticated: false,
    user: {}

};

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}