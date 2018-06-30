defineThreeUniverse(function (THREE) {

        var geometry = new THREE.BoxGeometry( 80, 80, 80 );
        var material = new THREE.MeshStandardMaterial( {color: 0xf0fff0} );
        var cube = new THREE.Mesh( geometry, material );

        return cube;
});
