class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.lancher = Constraint.create(options);
        World.add(world, this.lancher);
        this.pointB = pointB;
    }
    attach(body){
		this.lancher.bodyA=body;
	}
    fly(){
        this.lancher.bodyA = null;
    }

    display(){
        if(this.lancher.bodyA){
       
        
        var pointA = this.lancher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    
}