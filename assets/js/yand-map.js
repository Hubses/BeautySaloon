ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.406365, 37.568623],
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark([55.406365, 37.568623], {
        iconCaption: 'г. Подольск, Молодежная 4',
        hintContent: 'Россия, Московская обл., г. Подольск, Молодежная улица д.4'
    }, {
        preset: 'islands#redDotIconWithCaption'
    });

    myMap.geoObjects.add(myPlacemark);
}
