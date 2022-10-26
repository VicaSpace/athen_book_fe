import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentTab: 0,
    showTopLoading: false,
}

export const generalInformationSlice = createSlice({
    name: 'generalInformation',
    initialState,
    reducers: {
        setShowTopLoading: (state, action) => {
            state.showTopLoading = action.payload
        },
        setCurrentTab: (state, action) => {
            state.currentTab = action.payload
        }
    },
})

export const { setShowTopLoading, setCurrentTab } = generalInformationSlice.actions
export default generalInformationSlice.reducer