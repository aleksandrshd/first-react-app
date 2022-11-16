const initialState = {
  friends: [
    {id: 1, name: 'Maksim', avatarLink: 'https://i.ytimg.com/vi/-3fcgKTSyBQ/maxresdefault.jpg'},
    {id: 2, name: 'Andrey', avatarLink: 'https://funart.pro/uploads/posts/2019-10/1570103771_1.jpg'},
    {id: 3, name: 'Ivan', avatarLink: 'https://topkin.ru/wp-content/uploads/2016/09/ivangaj.jpg'},
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;