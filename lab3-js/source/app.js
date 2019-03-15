
class Note { // dit is als de extra klasse die je aanmaakt in java
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
  }
  
  createElement(){ //  createElement(title){
    
    //document.getElementById('btnAddNote').addEventListener('click', this.remove.bind(divpa));
    //return divpa;
  }
  
  add(){
    let br = document.createElement("br");
    let p = document.createElement("p");
    p.innerHTML = document.getElementById('txtAddNote').value;
    let text = p.innerHTML;

    let div = document.createElement("div");
    div.classList.add('card');

    div.innerHTML = text;

    let a = document.createElement("a");
    a.classList.add('card-remove');
    a.innerHTML = "remove";

    div.appendChild(br);

    let divpa = div.appendChild(a);

    document.querySelector("div.notes").appendChild(div);

  }
  
  saveToStorage(){

    let val = document.getElementById('txtAddNote').value;
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    //    ["note1", "note2"]
    // 1 - get localstorage (notes?)
    let arrOldNotes = JSON.parse(localStorage.getItem('notes'));
    console.log(arrOldNotes);

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
    //localStorage.getItem("noteee");  ????
    let arr = localStorage.getItem('notes');
    
   // console.log(typeof(arr));
   // console.log(arr);
   
   /*
    for(let i = 0; i < arr.length; i++){
        let note = new Note();
        note.add();
    }

    */
    /*
    let keys = Object.keys(localStorage["notes"]);
    let lengthe = keys.length;
    console.log(lengthe);

    for(let i = 0; i < lengthe ; i++){
      let note =  new Note();
      let oldnotes = JSON.parse(localStorage.getItem(localStorage.key(i)[1]));
      let contnotes = oldnotes;
     // console.log(oldnotes);
      note.add(oldnotes);
    }

    */

    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    let noteinput = document.getElementById('txtAddNote').value;
    let note =  new Note();
    note.add();
    note.saveToStorage();


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
    // this function should reset the form 
  }
  
}

let app = new App();

