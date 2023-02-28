
// pass over the mouse over each experience and shows al the tasks in the job

    // Action for the first button
    
    const buttonExperience = document.querySelector(".experience button")
    const tasks = document.querySelector(".experience ul");

    buttonExperience.addEventListener("mouseover", function() {
          tasks.classList.remove("tasks", "animate__animated", "animate__zoomOut")
          tasks.classList.add("aparecer", "animate__animated", "animate__zoomIn")
        })

    buttonExperience.addEventListener("mouseout", function() {
          tasks.classList.remove("aparecer", "animate__zoomIn")
          tasks.classList.add("animate__zoomOut", "tasks")
        })


// Action for the second button

    const buttonExperience1 = document.querySelector(".experience:nth-child(2) button")
    const tasks1 = document.querySelector(".experience:nth-child(2) ul");

    buttonExperience1.addEventListener("mouseover", function() {
          tasks1.classList.remove("tasks", "animate__animated", "animate__zoomOut")
          tasks1.classList.add("aparecer", "animate__animated", "animate__zoomIn")
        })

    buttonExperience1.addEventListener("mouseout", function() {
          tasks1.classList.remove("aparecer", "animate__zoomIn")
          tasks1.classList.add("animate__zoomOut", "tasks")
        })

// Action for the third button

    const buttonExperience2 = document.querySelector(".experience:nth-child(3) button")
    const tasks2 = document.querySelector(".experience:nth-child(3) ul");

    buttonExperience2.addEventListener("mouseover", function() {
          tasks2.classList.remove("tasks", "animate__animated", "animate__zoomOut")
          tasks2.classList.add("aparecer", "animate__animated", "animate__zoomIn")
        })

    buttonExperience2.addEventListener("mouseout", function() {
          tasks2.classList.remove("aparecer", "animate__zoomIn")
          tasks2.classList.add("animate__zoomOut", "tasks")
        })

// Action for the fourth button

    const buttonExperience3 = document.querySelector(".experience:nth-child(4) button")
    const tasks3 = document.querySelector(".experience:nth-child(4) ul");

    buttonExperience3.addEventListener("mouseover", function() {
            tasks3.classList.remove("tasks", "animate__animated", "animate__zoomOut")
            tasks3.classList.add("aparecer", "animate__animated", "animate__zoomIn")
          })
       
    buttonExperience3.addEventListener("mouseout", function() {
            tasks3.classList.remove("aparecer", "animate__zoomIn")
            tasks3.classList.add("animate__zoomOut", "tasks")
          });
  

