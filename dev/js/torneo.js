$(document).ready(function(){
    var GO = go.GraphObject.make;
    var ClsSet1 = GO(go.Diagram, "firstSetCls");
    
    var model01 = GO(go.Model);
    model01.nodeDataArray = [
        {key: "Cesar"},
        {key: "Cristhian"},
        {key: "David"},
        {key: "Eduardo"},
        {key: "Jhonatan"}
    ];
    ClsSet1.model = model01;
    ClsSet1.isEnabled = false;
});