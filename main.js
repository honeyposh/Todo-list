

window.addEventListener("load",()=>{
	const form=document.querySelector("#new-task-form")
	const input=document.querySelector("#new-task-input")
	const listEL=document.querySelector("#tasks")
	form.addEventListener("submit", (e)=>{
		e.preventDefault()
		const task=input.value
		if(!task){
			alert("please fill out the task")
			return
		}
		const taskEL=document.createElement("div")
		taskEL.classList.add("task") 
		const taskContentEl=document.createElement("div")
		taskContentEl.classList.add("content")
		taskEL.appendChild(taskContentEl)
		const taskInputEl=document.createElement("input")
		taskInputEl.classList.add("text")
		taskInputEl.type="text"
		taskInputEl.value=task
		taskInputEl.setAttribute("readonly","readonly")
		taskContentEl.appendChild(taskInputEl)
		const taskActionEL=document.createElement("div")
		taskActionEL.classList.add("actions")
		const taskEditEl=document.createElement("button")
		taskEditEl.classList.add("edit")
		taskEditEl.innerHTML="Edit"
		const taskDeleteEl=document.createElement("button")
		taskDeleteEl.classList.add("delete")
		taskDeleteEl.innerHTML="Delete"
		taskActionEL.appendChild(taskEditEl)
		taskActionEL.appendChild(taskDeleteEl)
		taskEL.appendChild(taskActionEL)

		listEL.appendChild(taskEL)
		input.value=""
		taskEditEl.addEventListener('click',()=>{
			if(taskEditEl.innerText.toLowerCase()=="edit"){
				taskInputEl.removeAttribute("readonly")
				taskInputEl.focus()
				taskEditEl.innerText="Save"
				
			}else{
				taskInputEl.setAttribute("readonly","readonly")
				taskEditEl.innerText="Edit"
			}
		})
		taskDeleteEl.addEventListener("click",()=>{
			listEL.removeChild(taskEL)
		})
	})

})
	 