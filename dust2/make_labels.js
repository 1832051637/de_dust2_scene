function make_label(font_color, board_color, labelWidth, size, name, pos_vector) {
        const canvas = make_label_canvas(font_color, board_color, labelWidth, size, name);
        const texture = new THREE.CanvasTexture(canvas);

        texture.minFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
    
        const labelMaterial = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          fog:false
        });
      
        const root = new THREE.Object3D();
  
        const labelBaseScale = 0.01;
        const label = new THREE.Sprite(labelMaterial);
        root.add(label);
        label.position.x = pos_vector[0];
        label.position.y = pos_vector[1]+4;
        label.position.z = pos_vector[2];
        
        label.scale.x = canvas.width  * labelBaseScale;
        label.scale.y = canvas.height * labelBaseScale;
    
        scene.add(root);
        return root;
    }

    function make_label_canvas(font_color, board_color, baseWidth, size, name) {
        const borderSize = 2;
        const ctx = document.createElement('canvas').getContext('2d');
        const font =  `${size}px bold sans-serif`;
        ctx.font = font;
        // measure how long the name will be
        const textWidth = ctx.measureText(name).width;
    
        const doubleBorderSize = borderSize * 2;
        const width = baseWidth + doubleBorderSize;
        const height = size + doubleBorderSize;
        ctx.canvas.width = width;
        ctx.canvas.height = height;
    
        // need to set font again after resizing canvas
        ctx.font = font;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
    
        ctx.fillStyle = board_color;
        ctx.fillRect(0, 0, width, height);
    
        // scale to fit but don't stretch
        const scaleFactor = Math.min(1, baseWidth / textWidth);
        ctx.translate(width / 2, height / 2);
        ctx.scale(scaleFactor, 1);
        ctx.fillStyle = font_color;
        ctx.fillText(name, 0, 0);
    
        return ctx.canvas;
    }