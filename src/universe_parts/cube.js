defineThreeUniverse(function (THREE) {

        var geometry = new THREE.BoxGeometry( 40, 40, 40 );
        var material = new THREE.MeshStandardMaterial( {color: 0x0000ff} );
        var cube = new THREE.Mesh( geometry, material );

        return cube;
});
