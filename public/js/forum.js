class Forum {

  constructor(containerElement){
    this.containerElement = containerElement;
  }

  show(){
        table.clear().draw();
    this.containerElement.classList.remove('inactive');
  }

  hide(){
    this.containerElement.classList.add('inactive');


}
  
  
   var table = $('#testid').DataTable();


}
