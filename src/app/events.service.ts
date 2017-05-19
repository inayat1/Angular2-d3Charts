export class Events {
  private task:any=[];

  addEvent(evt:any) {
    this.task.push(evt);
  }
  deleteEvent(evt:any) {
    this.task.splice(this.task.indexOf(evt),1);
  }
  getEventArr() {
    return this.task;
  }
}
