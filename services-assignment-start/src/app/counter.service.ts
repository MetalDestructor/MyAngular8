export class CounterService{
    operations = 0;
    count(){
        this.operations++;
        console.log(this.operations);
    }
}