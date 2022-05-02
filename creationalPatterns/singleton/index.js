import Singleton from "./Singleton.js";

const firstInstance = new Singleton('John Snow');
    console.log(`first instance name: ${firstInstance.name}`);
    const secondInstance = new Singleton('Jaime Lannister');
    console.log(`second instance name: ${secondInstance.name}`);
