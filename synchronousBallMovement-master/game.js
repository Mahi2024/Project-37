class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data)=>{
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        player = new Player();
        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form();
        form.display();
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var displayPos = 130;
            for(var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("lime");
                }
                else{
                    fill("black");
                }
                displayPos+= 40;
                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance,100,displayPos);
            }
        }

        if(keyIsDown(UP_ARROW)&&player.index !== null){
        player.distance += 50;
        player.update();
        }
    }
}