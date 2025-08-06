const navAdmin = [
    { icon: 'user', name: "Usuarios", link: 'users' },
    { icon: 'dashboard', name: "Panel", link: '/' },
    { icon: 'setting', name: "Opciones", link: 'setting' },
];

const navUser = [
    { icon: 'user', name: "Perfil", link: 'profil' },
    { icon: 'dashboard', name: "Panel", link: '/' },
    { icon: 'setting', name: "Opciones", link: 'setting' },
];

const navMaster = [
    { icon: 'user', name: "Usuarios", link: 'users' },
    { icon: 'dashboard', name: "Panel", link: '/' },
    { icon: 'carrot', name: "Productos", link: 'products' },
    { icon: 'publicity', name: "Banners", link: 'ban' },
    { icon: 'image', name: "Imágenes", link: 'img' },
    { icon: 'setting', name: "Opciones", link: 'setting' },
];

const sideberRole = (role) => {

    const category = {
        'admin': () => { return navAdmin },
        'user': () => { return  navUser },
        'master': () => { return  navMaster }
    };

    return category[role]();
};

export { sideberRole };