import { call, put, takeLatest } from "redux-saga/effects";
import {
  createSongRequest,
  createSongSuccess,
  fetchSongsRequest,
  fetchSongsSuccess,
  updateSongRequest,
  deleteSongRequest,
  fetchStatisticsSuccess,
  fetchStatisticsRequest,
  deleteSongSuccess,
  updateSongSuccess,
} from "./songSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { CreateSong, Song, SongStatistics } from "../interfaces/interface";
import api from "../config/apiConfig";

// Add a return type annotation for the generator function
function* fetchSongsSaga(): Generator<any, void, { data: Song[] }> {
  try {
    const response = yield call(api.get, "/");
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    console.error("Failed to fetch songs", error);
  }
}

function* createSongSaga(
  action: PayloadAction<CreateSong>
): Generator<any, void, any> {
  try {
    // Create the song
    const response = yield call(api.post, "/", action.payload);

    const statsResponse = yield call(api.get, "/stats");

    // Dispatch success actions
    yield put(createSongSuccess(response.data));
    yield put(fetchStatisticsSuccess(statsResponse.data));
  } catch (error) {
    console.error("Failed to create song", error);
  }
}

function* updateSongSaga(action: { payload: Song }): Generator<any, void, any> {
  try {
    // Make the API call to update the song
    yield call(api.put, `/${action.payload._id}`, action.payload);

    // Dispatch action to update the song in the store
    yield put(updateSongSuccess(action.payload));

    // Optionally update statistics
    const statsResponse = yield call(api.get, "/stats");
    yield put(fetchStatisticsSuccess(statsResponse.data));

  } catch (error) {
    console.error("Failed to update song", error);
  }
}

function* deleteSongSaga(
  action: PayloadAction<string>
): Generator<any, void, any> {
  try {
    // Delete the song
    yield call(api.delete, `/${action.payload}`);

    // Fetch updated statistics
    const statsResponse = yield call(api.get, "/stats");

    // Dispatch the updated list and statistics
    yield put(deleteSongSuccess(action.payload)); // Update the song list in the state
    yield put(fetchStatisticsSuccess(statsResponse.data)); // Update the statistics
  } catch (error) {
    console.error("Failed to delete song", error);
    // Handle error (optional)
  }
}

function* fetchStatisticsSaga(): Generator<
  any,
  void,
  { data: SongStatistics }
> {
  try {
    const response = yield call(api.get, "/stats");
    yield put(fetchStatisticsSuccess(response.data));
  } catch (error) {
    console.error("Failed to fetch statistics", error);
  }
}

export default function* rootSaga() {
  // Use the action creator directly instead of accessing the .type property
  yield takeLatest(fetchSongsRequest, fetchSongsSaga);
  yield takeLatest(createSongRequest, createSongSaga);
  yield takeLatest(updateSongRequest, updateSongSaga);
  yield takeLatest(deleteSongRequest, deleteSongSaga);
  yield takeLatest(fetchStatisticsRequest, fetchStatisticsSaga);
}
