let addNote = document.querySelector('.color-container button');
let notesContainer = document.querySelector('.notes');
let textArea = document.querySelector('textarea');
let heading = document.querySelector('.info h1');
let color = document.querySelector('input[type="color"]');

addNote.addEventListener('click', (e) => {
  let text = textArea.value;
  heading.style.display = 'none';

  if (text === "") {
    e.preventDefault();
    alert("You haven't added the text.");
    return;
  }

  let noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  noteDiv.style.backgroundColor = color.value;

  let para = document.createElement('p');
  para.classList.add('para');
  para.textContent = text;

  if(color.value.toLowerCase() === "#ffffff" || color.value.toLowerCase() === "white"){
    para.style.color = 'black';
  }
  else{
    para.style.color = 'white';
  }

  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('btn', 'del');
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', () => {
    noteDiv.remove();
    if (notesContainer.children.length === 0) {
      heading.style.display = 'block';
    }
  });

  noteDiv.appendChild(para);
  noteDiv.appendChild(deleteButton);

  notesContainer.appendChild(noteDiv);
  textArea.value = "";
});
