AFRAME.registerComponent('move',{
    schema:{
        movey:{type:"number",default:1},
    },
    tick:function(){
        this.data.movey=this.data.movey+0.01;
        var pos=this.el.getAttribute("position");
        pos.y=this.data.movey;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})
AFRAME.registerComponent('zoom-out',{
    schema:{
        movez:{type:"number",default:10},
    },
    tick:function(){
        this.data.movez=this.data.movez+0.01;
        var pos=this.el.getAttribute("position");
        pos.z=this.data.movez;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})
AFRAME.registerComponent('fall-down',{
    schema:{
        movey:{type:"number",default:0},
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.movey=this.data.movey-0.00004;
        })
        
        var pos=this.el.getAttribute("position");
        pos.y=pos.y+this.data.movey;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})