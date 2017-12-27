window.onload = function (ev)
{
    autotyped.init({speed: 200});
    document.querySelector('.type-button').addEventListener('click', function (ev)
    {
        var an = document.querySelector('#animation-select').value;
        var speed = document.querySelector('#speed-select').value;
        autotyped.init({speed: speed, animation: an});
    });

    document.querySelector('#animation-select').addEventListener('change', function ()
    {
        var an = document.querySelector('#animation-select').value;
        var speed = document.querySelector('#speed-select').value;
        autotyped.init({speed: speed, animation: an});
    });
};