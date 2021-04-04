let selectedLang = localStorage.getItem('language');
    selectedLang ? langTranslate(selectedLang) : langTranslate('en')
    //Translation buttons events
$('.translate').on('click', function() {
    let lang = $(this).attr('id');
    localStorage.setItem('language', lang);
    langTranslate(lang);  
})

function langTranslate(lang) {
    $('.lang').each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
    })
}

function lang(line = false, reloadLang = false) {
    return arrLang[selectedLang][line];
}

function updateDict(key, val){
    Object.keys(arrLang).forEach(function(item, index){
        arrLang[item][key] = val
    })

}

//Language package
let arrLang = {
    'en': {
        'communicating': "Communicating..."
    },
    'dk': {
        'communicating': "Communicating..." 
    }
}

