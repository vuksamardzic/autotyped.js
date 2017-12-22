window.onload = function (ev)
{
    autotyped.init({speed: 200});

    document.getElementById('autotyped').addEventListener('click', function (ev)
    {
        autotyped.init({selector: '#autotyped', speed: 200, animation: 'rotate'});
    });

    document.querySelector('.type-button').addEventListener('click', function (ev)
    {
        var an = document.querySelector('#animation-select').value;
        var speed = document.querySelector('#speed-select').value;

        console.log(an, speed);

        autotyped.init({speed: speed, animation: an});
        // debugger;
    });
};