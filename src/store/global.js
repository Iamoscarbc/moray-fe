export const state = () => ({
    transitionName: 'slide',
    step: 1,
    isMobile: false,
    breakpoint: ''
})

export const mutations = {
    SET_TRANSITION_NAME(state, data){
        state.transitionName = data
    },
    
    SET_STEP(state, data){
        state.step = data
    },

    SET_IS_MOBILE(state, data){
        state.isMobile = data
    },
    
    SET_BREAKPOINT(state, data){
        state.breakpoint = data
    }
}