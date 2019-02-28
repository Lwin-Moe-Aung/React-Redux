const initState = {
    posts: [
        {id:'1', title:'hello world 1', body: 'hello body 1'},
        {id:'2', title:'hello world 2', body: 'hello body 2'},
        {id:'3', title:'hello world 3', body: 'hello body 3'}
    ]
}
const rootReducer = (state = initState, action) =>{
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;