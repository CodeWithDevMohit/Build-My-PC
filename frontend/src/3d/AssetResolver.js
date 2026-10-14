export const resolveProductAssets = (product) => {
    if (!product) return null;

    const name = product.name.toLowerCase();
    const specs = product.specs || {};
    const desc = (specs.description || '').toLowerCase();
    const category = product.category;

    // Default return structure
    const asset = {
        hasModel: false,
        modelUrl: null,
        image: product.image,
        params: {}
    };

    if (category === 'GPU') {
        asset.params.fans = name.includes('dual') || name.includes('twin') || name.includes('2x') ? 2 
            : (name.includes('mini') || name.includes('itx') ? 1 : 3); // Default to 3 for modern GPUs unless specified
        asset.params.isWhite = name.includes('white') || name.includes('aero') || name.includes('snow');
        asset.params.length = asset.params.fans === 3 ? 3.2 : (asset.params.fans === 2 ? 2.4 : 1.8);
    } 
    else if (category === 'Motherboard') {
        let formFactor = 'ATX';
        if (name.includes('micro') || name.includes('-m') || name.includes('m-atx')) formFactor = 'Micro-ATX';
        if (name.includes('mini') || name.includes('-i') || name.includes('itx')) formFactor = 'Mini-ITX';
        if (name.includes('e-atx')) formFactor = 'E-ATX';
        asset.params.formFactor = formFactor;
        
        asset.params.width = formFactor === 'E-ATX' ? 3.3 : (formFactor === 'Mini-ITX' ? 1.7 : 2.4);
        asset.params.height = formFactor === 'Mini-ITX' ? 1.7 : (formFactor === 'Micro-ATX' ? 2.4 : 3.0);
    }
    else if (category === 'RAM') {
        asset.params.modules = (name.includes('4x') || name.includes('128gb')) ? 4 
            : (name.includes('1x') || (name.includes('8gb') && !name.includes('16gb'))) ? 1 : 2;
        asset.params.hasRGB = name.includes('rgb') || desc.includes('rgb');
        asset.params.isWhite = name.includes('white');
    }
    else if (category === 'Cooler') {
        asset.params.isAIO = name.includes('liquid') || name.includes('aio') || name.includes('water') || desc.includes('liquid');
        asset.params.fans = name.includes('360') ? 3 : (name.includes('240') ? 2 : 1);
        asset.params.hasRGB = name.includes('rgb') || desc.includes('rgb');
    }
    else if (category === 'Cabinet') {
        let formFactor = 'Mid-Tower';
        if (name.includes('full') || desc.includes('full tower')) formFactor = 'Full-Tower';
        if (name.includes('mini') || name.includes('itx') || desc.includes('mini tower')) formFactor = 'Mini-Tower';
        
        asset.params.height = formFactor === 'Full-Tower' ? 6.0 : (formFactor === 'Mini-Tower' ? 4.0 : 5.0);
        asset.params.depth = formFactor === 'Full-Tower' ? 5.5 : (formFactor === 'Mini-Tower' ? 4.0 : 4.5);
        asset.params.isWhite = name.includes('white') || name.includes('snow');
    }
    else if (category === 'PSU') {
        asset.params.isWhite = name.includes('white');
    }
    else if (category === 'Storage') {
        asset.params.isHeatsink = name.includes('heatsink') || desc.includes('heatsink');
    }

    return asset;
};
