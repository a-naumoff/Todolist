window.onload = function() {

  const addTask = document.getElementById('btn');
  const inputTask = document.getElementById('input');
  const listTasks = document.querySelector('ul');

  addTask.addEventListener('click', () => {
    if (inputTask.value == '') {
      return false
    }
    
    let newLiItem = document.createElement('li')                          // create new tag li
    newLiItem.classList = 'list-group-item'                               // add class in tag li
    newLiItem.innerHTML = `<input type="checkbox" class="mr-2">
                          <span id="counter">${listTasks.childElementCount + 1}.</span>                                
                          <span class="ml-2">${inputTask.value}</span>
                          <button class="close">&times;</button>`         // add HTML in tag li
    listTasks.append(newLiItem)                                           // add tag li in document
    inputTask.value = ''                                                // clean input after adding task
  })

  listTasks.addEventListener('click', (e) => {
    if (e.target.className !== 'close') {
      return false
    }

    let el = e.target
    el.parentNode.remove()                                                // remove task

    const countNumber = document.querySelectorAll('#counter')
    countNumber.forEach((item, i) => item.innerText = `${i + 1}.`)              // change list numbers

  })

  listTasks.addEventListener('change', (e) => {

    let textLineThrough = e.target.nextElementSibling.nextElementSibling

    if (e.target.checked) {                                               // change the flag and cross out the text
      textLineThrough.style.textDecoration = 'line-through'
    } else {
      textLineThrough.style.textDecoration = ''
    }

  })

}