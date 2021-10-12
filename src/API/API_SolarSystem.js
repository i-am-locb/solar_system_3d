import React from "react";
import * as axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: "https://api.le-systeme-solaire.net/rest.php/bodies/"
})

export const planetsAPI = {
    getPlanets(){
        return instance.get('?filter%5B%5D=isPlanet%2Cneq%2Cfalse&filter%5B%5D=id%2Cneq%2Cceres&filter%5B%5D=id%2Cneq%2Ceris&filter%5B%5D=id%2Cneq%2Chaumea&filter%5B%5D=id%2Cneq%2Cmakemake&filter%5B%5D=id%2Cneq%2Cpluton')
            
    }
}