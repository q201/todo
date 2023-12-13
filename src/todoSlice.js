import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for the asynchronous operation
export const saveItemAsync = createAsyncThunk(
  'todo/save',
  async (payload) => {
    try {
      console.log("as" + payload);
      const response = await fetch('http://localhost:2000/saveitem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      return data; // Return the data to be used as payload
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Rethrow the error to handle it in UI or catch block
    }
  }
);
// Async function to change status of the task
export const changeItemStatus = createAsyncThunk(
  'todo/changeItemStatus',
  async (payload) => {
    try {
      console.log("as" + payload);
      const response = await fetch('http://localhost:2000/changeItemStatus/'+payload, {
        method: 'PUT'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      return await response.json();// returning data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Rethrow the error to handle it in UI or catch block
    }
  }
);
//Async function to delete a record from the database
export const deleteItemAsync = createAsyncThunk(
  'todo/delete',
  async (payload) => {
    try {
      console.log("inside delete async" + payload);
      const response = await fetch('http://localhost:2000/delete_item/'+payload, {
        method: 'DELETE', 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      return data; // Return the data to be used as payload
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Rethrow the error to handle it in UI or catch block
    }
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: { value: [] },
  reducers: {
    addonclick: (state, action) => {
      console.log(state.value + "" + (action.payload));
      state.value.push(action.payload);
      console.log(state.value);
    },
    addTodo: (state, action) => {
      console.log(action.type + "" + action.payload);
      action.payload.forEach(element => {
        state.value.push(element);
      });
    },
    delTodo: (state, action) => {
      console.log(action.type);
      state.value.splice(action.payload, 1);
      console.log('deleting state');
    },
    changeStatus: (state, action) => {
      console.log(action.type);
      state.value.forEach((element, index) => {
        if(index===action.payload)
           element.status = true;
      });
      console.log('deleting state');
    }
  }
});

export const { delTodo, addTodo, addonclick,changeStatus } = todoSlice.actions;
export default todoSlice.reducer;