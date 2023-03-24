function initMindmap() {
    const nodes = new vis.DataSet([
    { id: 1, label: "TRUST", title: "This is the main topic", description: "Trust is the willingness to rely on the actions, words, decisions or functioning of another entity. This way trust involves an element of risk, because the trusting person is placing themselves in a vulnerable position.Trust is also a belief in the behaviour of a an entity in accordance to the expectations of a trusting person.No matter the framing the entity that is given trust can be anything: an object, an institution, a system, a person. But the act of trusting is available only for entities that consist some level of subjectivity: persons, institutions (i.e. government, state) or any systems that consists of persons, because willingness and belief are attributes of subjective entities only.Trust is related to behaviour (actions, words, decisions, functioning) of the entity. There is always an element of some dynamics involved, there is always some change in the system, be it the state of the entity, the state of the person trusting or the state of the environment both are in.", color: "#8B4513", shape: "circle", size: 80, x: -300, y: 0, font: { color: '#FFFFFF' }, },
    { id: 2, label: "Trust-Control Relation", title: "This is subtopic 1", description: "this is Subtopic 1 description", color: "#A83232", shape: "box", size: 40, x: -50, y: -200, font: { color: '#FFFFFF' }, },
    { id: 3, label: "Forced Trust vs Willingful Trust", title: "This is subtopic 2", description: "this is Subtopic 2 description", color: "#A83232", shape: "box", size: 40, x: -50, y: -100, font: { color: '#FFFFFF' }, },
    { id: 4, label: "Process-Oriented Trust vs Results-Oriented Trust", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#A83232", shape: "box", size: 40, x: -50, y: 0, font: { color: '#FFFFFF' }, },
    { id: 5, label: "Energy", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#A83232", shape: "box", size: 40, x: 0, y: 100, font: { color: '#FFFFFF' }, },
    { id: 6, label: "Trust in Subjective Entities vs Trust in Inanimated Objects", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#A83232", shape: "box", size: 40, x: -50, y: 200, font: { color: '#FFFFFF' }, },
    { id: 7, label: "Controlling as Directing", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -225, font: { color: '#FFFFFF' }, },
    { id: 8, label: "Controlling as Checking", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -175, font: { color: '#FFFFFF' }, },
    { id: 9, label: "Question 1", title: "This is subtopic 3", description: "Does forced trust even exist?", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -125, font: { color: '#FFFFFF' }, },
    { id: 10, label: "Question 2", title: "This is subtopic 3", description: "If we wish to control something, but we are not able to, does it even make sense to talk about trustworthiness? Maybe trustworthiness makes sense only in the context of willingfull trust?", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -75, font: { color: '#FFFFFF' }, },
    { id: 11, label: "Alignment", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -25, font: { color: '#FFFFFF' }, },
    { id: 12, label: "Reliability", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D46A2C", shape: "box", size: 40, x: 250, y: 25, font: { color: '#FFFFFF' }, },
    { id: 13, label: "Communication", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D46A2C", shape: "box", size: 40, x: 250, y: 175, font: { color: '#FFFFFF' }, },
    { id: 14, label: "Integration/Synchronization", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D46A2C", shape: "box", size: 40, x: 250, y: 225, font: { color: '#FFFFFF' }, },
    { id: 15, label: "Directing by Brute Force", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D4AF37", shape: "box", size: 40, x: 500, y: -275 },
    { id: 16, label: "Directing by Management", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D4AF37", shape: "box", size: 40, x: 500, y: -225 },
    { id: 17, label: "Checking as Examining the Entity", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D4AF37", shape: "box", size: 40, x: 500, y: -175 },
    { id: 18, label: "Checking as Examining Myself", title: "This is subtopic 3", description: "this is Subtopic 3 description", color: "#D4AF37", shape: "box", size: 40, x: 500, y: -125 },
    ]);


    const edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 1, to: 6 },
        { from: 2, to: 7 },
        { from: 2, to: 8 },
        { from: 3, to: 9 },
        { from: 3, to: 10 },
        { from: 4, to: 11 },
        { from: 4, to: 12 },
        { from: 6, to: 13 },
        { from: 6, to: 14 },
        { from: 7, to: 15 },
        { from: 7, to: 16 },
        { from: 8, to: 17 },
        { from: 8, to: 18 },
    ]);

    const container = document.getElementById("mindmap");

    const data = {
        nodes: nodes,
        edges: edges,
    };

    const options = {
        nodes: {
            shape: "box",
        },
        edges: {
            arrows: {
                to: { enabled: true,
                scaleFactor: 0.5, }
            },
        },
        interaction: {
            hover: true,
            zoomView: false,
            dragView: true,
        },
        physics: false,
    };

    const network = new vis.Network(container, data, options);

    const popup = document.getElementById("popup");

    function showPopup(content, x, y) {
        popup.innerHTML = content;
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
        popup.classList.remove("hidden");
    }

    function hidePopup() {
        popup.classList.add("hidden");
    }

 //network.on("showPopup", function (nodeId) {
 //       const node = nodes.get(nodeId);
 //       const popupContent = node.description;
 //       network.canvas.body.container.style.cursor = "pointer";
 //       popup.innerHTML = popupContent;
 //       popup.classList.remove("hidden");
 //   });

 //   network.on("hidePopup", function () {
 //       network.canvas.body.container.style.cursor = "default";
 //       popup.classList.add("hidden");
 //   });

    network.on("hoverNode", function (params) {
        const nodeId = params.node;
        const node = nodes.get(nodeId);
        const popupContent = node.description;
        const { x, y } = params.pointer.DOM;
        showPopup(popupContent, x + 15, y + 15);
//        const canvasPos = network.canvasToDOM(params.pointer.canvas);
//        popup.style.left = `${canvasPos.x}px`;
//        popup.style.top = `${canvasPos.y}px`;
//        network.canvas.body.container.style.cursor = "pointer";
//        const { x, y } = params.pointer.DOM;
    });

    network.on("blurNode", function (params) {
        network.canvas.body.container.style.cursor = "default";
        hidePopup();
    });
}