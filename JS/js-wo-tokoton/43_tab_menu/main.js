'use strict';
{
  const tablabels = document.querySelectorAll('.tab__label li a');
  const tabcontents = document.querySelectorAll('.tab__content');

  tablabels.forEach(clickedlabel => {
    clickedlabel.addEventListener('click', e => {
      e.preventDefault();

      tablabels.forEach(label => {
        label.classList.remove('active');
      });

      clickedlabel.classList.add('active');

      tabcontents.forEach(content => {
        content.classList.remove('active');
      })

      document.getElementById(clickedlabel.dataset.id).classList.add('active')
    })
  });
  
}
