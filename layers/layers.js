var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cps_estados_pet_match_1 = new ol.format.GeoJSON();
var features_cps_estados_pet_match_1 = format_cps_estados_pet_match_1.readFeatures(json_cps_estados_pet_match_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cps_estados_pet_match_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cps_estados_pet_match_1.addFeatures(features_cps_estados_pet_match_1);
var lyr_cps_estados_pet_match_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cps_estados_pet_match_1, 
                style: style_cps_estados_pet_match_1,
                interactive: true,
                title: '<img src="styles/legend/cps_estados_pet_match_1.png" /> cps_estados_pet_match'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cps_estados_pet_match_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cps_estados_pet_match_1];
lyr_cps_estados_pet_match_1.set('fieldAliases', {'Estado': 'Estado', 'Municipio': 'Municipio', 'Codigo_postal': 'Codigo_postal', });
lyr_cps_estados_pet_match_1.set('fieldImages', {'Estado': 'TextEdit', 'Municipio': 'TextEdit', 'Codigo_postal': '', });
lyr_cps_estados_pet_match_1.set('fieldLabels', {'Estado': 'header label', 'Municipio': 'header label', 'Codigo_postal': 'header label', });
lyr_cps_estados_pet_match_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});