"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
    // dit is als de extra klasse die je aanmaakt in java
    function Note(title) {
        _classCallCheck(this, Note);

        this.title = title;
        // HINT🤩 this.element = this.createElement(title);
    }

    _createClass(Note, [{
        key: "createElement",
        value: function createElement() {//  createElement(title){

            //document.getElementById('btnAddNote').addEventListener('click', this.remove.bind(divpa));
            //return divpa;
        }
    }, {
        key: "add",
        value: function add() {
            var br = document.createElement("br");
            var p = document.createElement("p");
            p.innerHTML = document.getElementById('txtAddNote').value;
            var text = p.innerHTML;

            var div = document.createElement("div");
            div.classList.add('card');

            div.innerHTML = text;

            var a = document.createElement("a");
            a.classList.add('card-remove');
            a.innerHTML = "remove";

            div.appendChild(br);

            var divpa = div.appendChild(a);

            document.querySelector("div.notes").appendChild(div);
        }
    }, {
        key: "saveToStorage",
        value: function saveToStorage() {

            var val = document.getElementById('txtAddNote').value;
            var i = 0;
            var arrui = [];
            arrui.push(val);

            var appendToStorage = function appendToStorage(name, data) {
                var old = localStorage.getItem(name);
                if (old === null) old = "";
                localStorage.setItem(name, old + data);
            };

            appendToStorage('notes', JSON.stringify(arrui));

            // HINT🤩
            // localStorage only supports strings, not arrays
            // if you want to store arrays, look at JSON.parse and JSON.stringify
        }
    }, {
        key: "remove",
        value: function remove() {
            // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
            // in this function, 'this' will refer to the current note element
        }
    }]);

    return Note;
}();

var App = function () {
    //dit is de main klasse in java
    function App() {
        _classCallCheck(this, App);

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

    _createClass(App, [{
        key: "loadNotesFromStorage",
        value: function loadNotesFromStorage() {
            //localStorage.getItem("noteee");  ????

            var arr = JSON.parse(localStorage.getItem('notes'));

            for (var i = 0; i < arr.length; i++) {
                var note = new Note();
                note.add();
            }
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
    }, {
        key: "createNote",
        value: function createNote(e) {
            var noteinput = document.getElementById('txtAddNote').value;
            var note = new Note();
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
    }, {
        key: "reset",
        value: function reset() {
            // this function should reset the form 
        }
    }]);

    return App;
}();

var app = new App();

//# sourceMappingURL=app.js.map