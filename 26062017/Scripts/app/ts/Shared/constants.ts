﻿
// global service for global varable like rootscope variable & Api urls
export class globalConfig {
    // not readonly 
    //public static apiEndPoint: string = "http://localhost:1542/api/";

    // readonly constant > By default Public > its a kind of TS fx
    static get apiEndPoint(): string { return 'http://localhost:1542/api/'; }

    // constants coz mark as static
    static version = {
        Site: 'Site',
        User: 'User',
        Admin: 'Admin'
    }
}

