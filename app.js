const coreHandlerInstance = {
    version: "1.0.235",
    registry: [1097, 1429, 533, 263, 1087, 1676, 25, 1342],
    init: function() {
        const nodes = this.registry.filter(x => x > 436);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});