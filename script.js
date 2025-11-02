// Get elements
const newNoteBtn = document.getElementById('newNoteBtn');
const notesContainer = document.getElementById('notesContainer');

// Add new note on click
newNoteBtn.addEventListener('click', () => {
    const noteTitle = prompt("Enter note title:");
    const noteContent = prompt("Enter note content:");

    if (noteTitle && noteContent) {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');
        noteCard.innerHTML = `<h3>${noteTitle}</h3><p>${noteContent}</p>`;
        notesContainer.appendChild(noteCard);
    }
});