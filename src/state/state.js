import { reRender } from '../renderer';

const initialState = {
    articles: [],
    readLater: [],
    maxPages: 10,

    currentPage: 1,
    currentSection: 'all',
    searchTerm: '',
};

let currentState = initialState;

let sideEffects = [];

export function addSideEffect(condition, action) {
    sideEffects.push({condition, action});
}

function updateState(newState) {
    console.log(newState);
    const sideEffectsToRun = sideEffects.filter(sideEffect => sideEffect.condition(currentState, newState));
    currentState = newState;
    sideEffectsToRun.forEach(sideEffects => sideEffects.action());
    reRender();
}

export function dispatch(action) {
    const newState = action(currentState);
    if (currentState !== newState) {
        updateState(newState);
        persistState();
    }
}

export function getState() {
    return currentState;
}

function persistState() {
    localStorage.setItem('state', JSON.stringify(currentState));
}

function rehydrateState() {
    const newStateStringified = localStorage.getItem('state');
    if(newStateStringified) {
        currentState = JSON.parse(newStateStringified);
    }
}

rehydrateState();