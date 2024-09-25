 // JavaScript to toggle the dropdown and arrow rotation
 const projects = document.querySelectorAll('.project-list li');

 projects.forEach((project, index) => {
     const arrow = project.querySelector('.arrow');
     const preview = project.querySelector('.project-preview');

     project.querySelector('.project-name').addEventListener('click', () => {
         // Close other open previews
         projects.forEach((otherProject) => {
             if (otherProject !== project) {
                 otherProject.classList.remove('active');
             }
         });

         // Toggle this project's preview and arrow rotation
         project.classList.toggle('active');
     });
 });