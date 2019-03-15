
class Note { // dit is als de extra klasse die je aanmaakt in java
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
    
    // this.element = this.createElement(title);
  }
  
  createElement(){ 
    //let a = document.querySelector("a");
    
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
  }
  
  add(contentnote){
    console.log(contentnote);
    let br = document.createElement("br");
    let p = document.createElement("p");
    p.innerHTML = document.getElementById('txtAddNote').value;
    let text = p.innerHTML;

    if(contentnote != null){
      text = contentnote;
    }

    let div = document.createElement("div");
    div.classList.add('card');

    div.innerHTML = text;

    let a = document.createElement("a");
    a.classList.add('card-remove');
    a.href = "#";
    a.innerHTML = "remove";

    div.appendChild(br);
    div.appendChild(a);

    document.querySelector("div.notes").appendChild(div);

    a.addEventListener('click', this.remove.bind(text));

  }
  
  saveToStorage(){

    let val = document.getElementById('txtAddNote').value;
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    let arrOldNotes = JSON.parse(localStorage.getItem('notes'));

    // 2 - als die bestaan, lees uit, anders zet lege array klaar
    if(arrOldNotes == null){
      arrOldNotes = [];
    }
    
    // 3 - arrNotes.push("val")
    arrOldNotes.push(val);
    // 4 - stuur naar localstorage (stringify(array))
    localStorage.setItem('notes', JSON.stringify(arrOldNotes));

  }
  
  remove(){
    let notesremove = JSON.parse(localStorage.getItem('notes'));
    
    let index = notesremove.indexOf(this);

    console.log(this);
    console.log(index);
    console.log(notesremove);
    localStorage.removeItem('notes')

    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App { //dit is de main klasse in java
  constructor() {
    console.log("👊🏼 The Constructor!");
    this.btnAdd = document.getElementById('btnAddNote');
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();

    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    let arr = JSON.parse(localStorage.getItem('notes'));
    console.log(arr);

    if(arr != null){
    for(let i = 0; i < arr.length; i++){
      let note =  new Note();
      note.add(arr[i]);
    }
  }
   
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    let noteinput = document.getElementById('txtAddNote').value;
    let note =  new Note();
    note.add();
    note.saveToStorage();
    this.reset();

    // notitieveld krijgen in note
    // notes htlm elementen aanma
    //  add() open zetten en die maakt dan een nieuw aan vanaf er daar de juiste code in staat
    

    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    document.getElementById('txtAddNote').value = "";
    // this function should reset the form 
  }
  
}

let app = new App();

