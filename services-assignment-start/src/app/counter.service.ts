export class CounterService{
    activeCounter = 0;
    inactiveCounter = 0;

    countActive(){
        this.activeCounter++;
        console.log('Inactive to Active count: ' + this.activeCounter);
    }

    countInactive(){
        this.inactiveCounter++;
        console.log('Active to Inactive count: ' + this.inactiveCounter);
    }
}