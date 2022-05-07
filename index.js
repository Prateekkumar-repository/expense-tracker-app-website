function saveToLocalStorage(event) {
    event.preventDefault();
       const cost = event.target.amount.value;
       const type = event.target.Description.value;
       const cat = event.target.category.value;
    const obj = {
        cost,
        type,
        cat
    }
    localStorage.setItem(obj.type, JSON.stringify(obj))
    showNewUserOnScreen(obj)
}


window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =1; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('userExpenses');
    const childHTML =
`<li id=${user.type}>${user.type}-${user.cat}-${user.cost}<button onclick=deleteUser('${user.type}')> Delete Expense </button></li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}



function deleteUser(typeId){
    console.log(typeId)
    localStorage.removeItem(typeId);
    removeUserFromScreen(typeId);

}

function removeUserFromScreen(typeId){
    const parentNode = document.getElementById('userExpenses');
    const childNodeToBeDeleted = document.getElementById(typeId);
    parentNode.removeChild(childNodeToBeDeleted)
}


