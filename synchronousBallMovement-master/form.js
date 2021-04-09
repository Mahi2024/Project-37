class Form{
    constructor(){
        this.input1 = createInput("Enter your name");
        this.input2 = createInput("Enter your option");
        this.o1 = createElement('h4');
        this.o2 = createElement('h4');
        this.o3 = createElement('h4');
        this.o4 = createElement('h4');
        this.question = createElement('h3')
        this.button = createButton("Submit");
        this.title = createElement('h2');
    }
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();
    }
    display(){
        this.title.html("MY Quiz Game");
        this.title.position(350,0);
        this.question.html("What is your favourite color?");
        this.question.position(150,80);
        this.o1.html("1. Red");
        this.o1.position(150,100);
        this.o2.html("2. Black");
        this.o2.position(150,120);
        this.o3.html("3. Pink");
        this.o3.position(150,140);
        this.o4.html("4. Green");
        this.o4.position(150,160);
        this.input1.position(150,230);
        this.input2.position(350,230);
        this.button.position(290,300);
        this.button.mousePressed(() =>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            player.name = this.input1.value();
            player.distance = this.input2.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        }
    }
}