var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BrgyBoundary3_2 = new ol.format.GeoJSON();
var features_BrgyBoundary3_2 = format_BrgyBoundary3_2.readFeatures(json_BrgyBoundary3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrgyBoundary3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrgyBoundary3_2.addFeatures(features_BrgyBoundary3_2);
var lyr_BrgyBoundary3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BrgyBoundary3_2, 
                style: style_BrgyBoundary3_2,
                interactive: true,
                title: '<img src="styles/legend/BrgyBoundary3_2.png" /> Brgy Boundary 3'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BrgyBoundary3_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_BrgyBoundary3_2];
lyr_BrgyBoundary3_2.set('fieldAliases', {'ID': 'ID', 'ID2': 'ID2', 'Barangays': 'Barangays', 'Areaha': 'Areaha', });
lyr_BrgyBoundary3_2.set('fieldImages', {'ID': 'TextEdit', 'ID2': 'TextEdit', 'Barangays': 'TextEdit', 'Areaha': 'TextEdit', });
lyr_BrgyBoundary3_2.set('fieldLabels', {'ID': 'no label', 'ID2': 'no label', 'Barangays': 'header label', 'Areaha': 'no label', });
lyr_BrgyBoundary3_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});