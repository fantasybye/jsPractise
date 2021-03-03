function Events(){
    this.on=function(eventName,callBack){
        if(!this.handles){
            this.handles={};
        }
        if(!this.handles[eventName]){
            this.handles[eventName]=[];
        }
        this.handles[eventName].push(callBack);
    }
    this.emit=function(eventName,obj){
        if(this.handles[eventName]){
            for(let i=0;i<this.handles[eventName].length;i++){
                this.handles[eventName][i](obj);
            }
        }
    }
    return this;
}