function initMindmap() {
    const nodes = new vis.DataSet([
    { id: 1, label: "TRUST", title: "This is the main topic", description: "Trust is the willingness to rely on the actions, words, decisions or functioning of another entity. This way trust involves an element of risk, because the trusting person is placing themselves in a vulnerable position.Trust is also a belief in the behaviour of a an entity in accordance to the expectations of a trusting person.No matter the framing the entity that is given trust can be anything: an object, an institution, a system, a person. But the act of trusting is available only for entities that consist some level of subjectivity: persons, institutions (i.e. government, state) or any systems that consists of persons, because willingness and belief are attributes of subjective entities only.Trust is related to behaviour (actions, words, decisions, functioning) of the entity. There is always an element of some dynamics involved, there is always some change in the system, be it the state of the entity, the state of the person trusting or the state of the environment both are in.", color: "#8B4513", shape: "circle", size: 80, x: -300, y: 0, font: { color: '#FFFFFF' }, },
    { id: 2, label: "Trust-Control Relation", title: "This is subtopic 1", description: "The relationship between trust and control is inversely proportional: we trust as much as we do not control - we control as much as we do not trust. Thus, control is inseparable from trust, it is the mirror image of trust, and we cannot talk about one without talking about the other. Control can mean different things. It can be checking, but it can also be directing. As checking, it can be patient observation, but it can be interrogation. As directing, it can be guiding, but it can also be forcing. Finally, it can be controlling different things: you can control the partner or the object of the relationship, but you can also control (in all the ways mentioned above) the relationship itself. The analysis of controlling itself reveals a lot to us about trust, because each of these methods of control is reflected in the way we trust.", color: "#A83232", shape: "box", size: 40, x: -50, y: -200, font: { color: '#FFFFFF' }, },
    { id: 3, label: "Forced Trust vs Willingful Trust", title: "This is subtopic 1", description: "Perhaps the most important differentiation in terms of the way of trusting is the distinction between voluntary and forced trust. Do I trust simply because I cannot control the person or object in question, or could I control, but for some reason I don't want to? If I can't control, why can't I? And if I don't want to, why don't I want to? Perhaps I don't want to because controlling would circumvent freedom? Or maybe it's just easier for me not to control something in a given situation?", color: "#A83232", shape: "box", size: 40, x: -50, y: -100, font: { color: '#FFFFFF' }, },
    { id: 4, label: "Process-Oriented Trust vs Results-Oriented Trust", title: "This is subtopic 3", description: "This is another important distinction. A completely different kind of trust is trust in the results of some action (in the extreme, I don't care at all how the result will be settled, I just trust that it will be) and trust in the manner and method of action. The former kind, for simplicity, let's call reliability. Let's also call the latter alignment.", color: "#A83232", shape: "box", size: 40, x: -50, y: 0, font: { color: '#FFFFFF' }, },
    { id: 5, label: "Energy", title: "This is subtopic 3", description: "Both, control and trust, require energy. This energy expenditure in a relationship can take many forms. In the case of control, it can be work, but it can also be fighting, conflict or even violence. It can also be the attention we need to spend on checking something. But also the reverse of control, i.e. trust, can require a high energy expenditure: here, too, attentiveness may be needed, and such non-controlling attentiveness, presence, noticing, acknowledgement, often perhaps empathy, can be very demanding.", color: "#A83232", shape: "box", size: 40, x: 0, y: 100, font: { color: '#FFFFFF' }, },
    { id: 6, label: "Trust in Subjective Entities vs Trust in Inanimated Objects", title: "This is subtopic 3", description: "The last distinction is the difference between trust in relation to objects and trust in relation to subjective, conscious beings. Is this difference root, or is it the result of our attitudes discussed earlier? Do all the types of trust highlighted here apply equally to one and the other, or are there some patterns that cause us to place certain types of trust only on conscious beings, while other types are reserved for objects?", color: "#A83232", shape: "box", size: 40, x: -50, y: 200, font: { color: '#FFFFFF' }, },
    { id: 7, label: "Controlling as Directing", title: "This is subtopic 3", description: "---", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -225, font: { color: '#FFFFFF' }, },
    { id: 8, label: "Controlling as Checking", title: "This is subtopic 3", description: "---", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -175, font: { color: '#FFFFFF' }, },
    { id: 9, label: "Question 1", title: "This is subtopic 3", description: "Does forced trust even exist?", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -125, font: { color: '#FFFFFF' }, },
    { id: 10, label: "Question 2", title: "This is subtopic 3", description: "If we wish to control something, but we are not able to, does it even make sense to talk about trustworthiness? Maybe trustworthiness makes sense only in the context of voluntary trust?", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -75, font: { color: '#FFFFFF' }, },
    { id: 11, label: "Alignment", title: "This is subtopic 3", description: "---", color: "#D46A2C", shape: "box", size: 40, x: 250, y: -25, font: { color: '#FFFFFF' }, },
    { id: 12, label: "Reliability", title: "This is subtopic 3", description: "---", color: "#D46A2C", shape: "box", size: 40, x: 250, y: 25, font: { color: '#FFFFFF' }, },
    { id: 13, label: "Communication", title: "This is subtopic 3", description: "---", color: "#D46A2C", shape: "box", size: 40, x: 250, y: 175, font: { color: '#FFFFFF' }, },
    { id: 14, label: "Integration/Synchronization", title: "This is subtopic 3", description: "---", color: "#D46A2C", shape: "box", size: 40, x: 250, y: 225, font: { color: '#FFFFFF' }, },
    { id: 15, label: "Directing by Brute Force", title: "This is subtopic 3", description: "---", color: "#D4AF37", shape: "box", size: 40, x: 500, y: -275 },
    { id: 16, label: "Directing by Management", title: "This is subtopic 3", description: "---", color: "#D4AF37", shape: "box", size: 40, x: 500, y: -225 },
    { id: 17, label: "Checking as Examining the Entity", title: "This is subtopic 3", description: "---", color: "#D4AF37", shape: "box", size: 40, x: 500, y: -175 },
    { id: 18, label: "Checking as Examining Myself", title: "This is subtopic 3", description: "---", color: "#D4AF37", shape: "box", size: 40, x: 500, y: -125 },
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