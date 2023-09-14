export const state = () => ({
    transitionName: 'slide',
    step: 1
})

export const mutations = {
    SET_TRANSITION_NAME(state, data){
        state.transitionName = data
    },
    
    SET_STEP(state, data){
        state.step = data
    }
}