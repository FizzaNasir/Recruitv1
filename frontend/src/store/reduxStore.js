import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getAllJobs as getAllJobsReq } from "../util/api-call";

const objSlice = createSlice({
  name: "obj",
  initialState: { obj: null },
  reducers: {
    save(state, action) {
      console.log("in save method");
      state.obj = action.payload;
    },
  },
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticatebd = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const JobSlice = createSlice({
  name: "job",
  initialState: { isLoading: false, jobs: [], error: null },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setErrors: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const getAllJobs = () => async (dispatch) => {
  try {
    dispatch(JobSlice.actions.setIsLoading(true));
    const res = await getAllJobsReq();
    dispatch(JobSlice.actions.setJobs(res.data.data.jobs));
    dispatch(JobSlice.actions.setErrors(null));
    dispatch(JobSlice.actions.setIsLoading(false));
  } catch (e) {
    dispatch(JobSlice.actions.setErrors(e.message));
    dispatch(JobSlice.actions.setIsLoading(false));
  }
};

const store = configureStore({
  reducer: {
    confirmObj: objSlice.reducer,
    auth: AuthSlice.reducer,
    jobs: JobSlice.reducer,
  },
});

export const objActions = objSlice.actions;
export const authActons = AuthSlice.actions;
export default store;
