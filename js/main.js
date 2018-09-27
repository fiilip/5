const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend', dragEnd);


for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragover', dragEnter);
    empty.addEventListener('dragover', dragLeave);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += 'hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'fill';

}