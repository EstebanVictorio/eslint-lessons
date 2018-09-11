function * genContainer(containerCount) {
    for (let i = 0; i < containerCount; i++) {
        yield document.createElement("div");
    }
}

function drainAppContainers(generator, arr = []) {
    let next = generator.next().value;
    if (next) {
        arr.push(next);
    }
    return !next ? arr : drainAppContainers(generator, arr);
}


export {genContainer, drainAppContainers};