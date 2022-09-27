
   function checkboxhandle(event) {        
      
         let checkboxes = document.querySelectorAll('input[name="repasses[]"]');
         checkboxes.forEach((checkbox) => {
               checkbox.checked = event.target.checked;
            });
        
      
    }
