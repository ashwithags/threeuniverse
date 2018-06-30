defineThreeUniverse(function (THREE) {

        var geometry = new THREE.BoxGeometry( 50, 50, 50 );
        var material = new THREE.MeshStandardMaterial( {color: 0x0000ff} );
        var cube = new THREE.Mesh( geometry, material );

        return cube;
});
