export const state = () => ({
    transitionName: 'slide'
})

export const mutations = {
    SET_TRANSITION_NAME(state, data){
        state.transitionName = data
    }
}