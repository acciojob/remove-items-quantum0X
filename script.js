//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
	const button = document.getElementById('button');
	const colors = document.getElementById('colorSelect');
  
  button.addEventListener('click', function () {
		selectedColor = colors.options[colors.selectedIndex]
    colors.removeChild(selectedColor)    
  })
})