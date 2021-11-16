class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('Play');
        this.saludo = createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.saludo.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Juego de carreras");
        title.position(130,0);

        

        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.update();
            player.updateCount(playerCount);
            this.saludo.html("Hola "+player.name);
            this.saludo.position(130,160);

        });
    }
}