let log = new Log(document.querySelector('.log'));

let char = new Knight('Ozzy')
let monster = new LittleMonster();

let stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();