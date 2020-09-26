let eventListeners = [];

let root;
let mountPoint;

export function onChange(selector, callback) {
    eventListeners.push({ event: 'change', selector, callback });
}

export function onClick(selector, callback) {
    eventListeners.push({ event: 'click', selector, callback });
}

export function reRender() {
    eventListeners.forEach(listener => {
        const element = listener.selector();
        element && element.removeEventListener(listener.event, listener.callback);
    });
    eventListeners = [];
    mountPoint.innerHTML = root();

    eventListeners.forEach(listener => {
        const element = listener.selector();
        element && element.addEventListener(listener.event, listener.callback);
    });
}

export function render(selector, rootNode) {
    root = rootNode;
    mountPoint = selector;
    reRender();
}