import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import {AppThunk} from '../store';
import axios from "axios";

interface CoordinatesPayload {
	latitude: number | null;
	longitude: number | null;
}

interface LocationPayload {
	coordinates: CoordinatesPayload;
	address: string | null;
}

const initialState: LocationPayload = {
	coordinates: {
		latitude: null,
		longitude: null,
	},
	address: null,
};

const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		setLocation: (state, { payload }: PayloadAction<CoordinatesPayload>) => {
			state.coordinates = {
				latitude: payload.latitude,
				longitude: payload.longitude,
			};
		},
		setAddress: (state, { payload }: PayloadAction<string>) => {
			state.address = payload;
		},
	},
});
const locationReducer = locationSlice.reducer;

export default locationReducer;

export const { setLocation, setAddress } = locationSlice.actions;

export const fetchUserLocation =
	(latitude: number, longitude: number): AppThunk =>
	async (dispatch) => {
		try {
			const response = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC-rx6ZQMcHDYNXupzGqLhs5uEnKvmKB90`
			);
			const results = response.data.results;
			if (results.length > 0) {
				dispatch(setAddress(results[0].formatted_address));
			}
		} catch (err) {
			console.log(err);
		}
	};
