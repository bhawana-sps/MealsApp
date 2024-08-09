export const setData = (id) => ({
    type: 'ADD_FAVOURITE',
    payload: id,
  });
  
  export const clearData = (id) => ({
    type: 'CLEAR_FAVOURITE',
    payload: id,
  });

  // export const recentlyAdded=(id)=>({
  //   type:'RECENTLY_ADDED_FAVOURITE',
  //   payload:id
  // })