class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
    }

    hide(){
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Super Mario Game");
        title.position(500,50);

        this.input.position(500,200);
        this.button.position(500,300);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            
        })
    }
}