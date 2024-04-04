import { createSlice } from '@reduxjs/toolkit';

let nextUserId = 7; 

const initialState = {
  contacts: [],
  favorites: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      const newUser = { ...action.payload, id: nextUserId++ }; 
      if (newUser.isFavorite) {
        state.favorites.push(newUser);
      } else {
        state.contacts.push(newUser);
      }
    },

    toggleFavorite(state, action) {
      console.log(state.contacts);
      console.log(action.payload)
      const user = state.contacts.find(user => user.id === action.payload);
      console.log(state.contacts.map(user => user ))
      console.log(user)
      if (user) {
        if (state.favorites.some(fav => fav.id === user.id)) {
          state.favorites = state.favorites.filter(fav => fav.id !== user.id);
        } else {
          state.favorites.push(user);
        }
        user.isFavorite = !user.isFavorite;
      } else {
        const favoriteUser = state.favorites.find(fav => fav.id === action.payload);
        if (favoriteUser) {
          state.favorites = state.favorites.filter(fav => fav.id !== favoriteUser.id);
          favoriteUser.isFavorite = !favoriteUser.isFavorite;
          state.contacts.push(favoriteUser);
        }
      }
    },  
    
    removeUser(state, action) {
      const id = action.payload;
      const userIndex = state.contacts.findIndex(user => user.id === id);
      const favoriteIndex = state.favorites.findIndex(user => user.id === id);
    
      if (userIndex !== -1) {
        state.contacts.splice(userIndex, 1);
      }
    
      if (favoriteIndex !== -1) {
        const removedUser = state.favorites.splice(favoriteIndex, 1)[0];  
        removedUser.isFavorite = false; 
        state.contacts.push(removedUser); 
      }
    },
    
  },
});

export const { addUser, toggleFavorite, removeUser } = usersSlice.actions;
export default usersSlice.reducer;