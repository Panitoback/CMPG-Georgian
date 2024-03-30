const features = document.getElementsByClassName('feature');
const descriptions = document.getElementsByClassName('description');

function show(index) {
    const description = descriptions[index];
    
    const isVisible = description.style.display === 'block';

    if (!isVisible) {
        description.style.display = 'block';
    }else{
        description.style.display = 'none';
    }
}

for (let i = 0; i < features.length; i++) {
    features[i].addEventListener('click', function() {
        show(i);
    });
    console.log(features);
}


