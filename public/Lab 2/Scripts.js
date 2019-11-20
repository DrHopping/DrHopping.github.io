function area(obj){
    var area = Math.abs((obj.PointA_x.value*(obj.PointB_y.value - obj.PointC_y.value) + obj.PointB_x.value*(obj.PointC_y.value - obj.PointA_y.value) + obj.PointC_x.value*(obj.PointA_y.value - obj.PointB_y.value))/2).toFixed(1)
    obj.Area.value = area
}
function distance(obj) {
    var distance = Math.sqrt(obj.Point_x.value*obj.Point_x.value + obj.Point_y.value*obj.Point_y.value)
    obj.Distance.value = distance.toFixed(3)
}
function swap(obj){
    var temp = obj.Var1.value
    obj.Var1.value = obj.Var2.value
    obj.Var2.value = temp
}
function test(){
    document.write(123)
}