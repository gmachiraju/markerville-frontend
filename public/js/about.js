class About {
  constructor(containerElement){
    this.containerElement = containerElement;
  }

  show(){
    this.containerElement.classList.remove('inactive');
    table.clear().draw();
  }

  hide(){
    this.containerElement.classList.add('inactive');
  }


}
  
   var table = $('#testid').DataTable();

