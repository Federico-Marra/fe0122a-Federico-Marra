//MUSICA
fetch('json/audio.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var audio = document.querySelector('#audio');
        var creaElemento = document.createElement('audio');
        creaElemento.setAttribute('src', 'audio/' + item.file_audio);
        creaElemento.setAttribute('controls', 'controls');
        audio.append(creaElemento);
    });
});
//VIDEO
fetch('json/video.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var video = document.querySelector('#video');
        var creaElemento = document.createElement('video');
        creaElemento.setAttribute('src', 'video/' + item.nome_video);
        creaElemento.setAttribute('controls', 'controls');
        video.append(creaElemento);
    });
});
/*class Music {
    titolo:string;
    file_audio:string;

    constructor(titolo:string, file_audio:string){
        this.titolo = titolo;
        this.file_audio = file_audio;
    }
}

class Videoo {
    titolo:string;
    nome_video: string;

    constructor(titolo:string, nome_video:string){
        this.titolo = titolo;
        this.nome_video = nome_video;
    }
}*/ 
