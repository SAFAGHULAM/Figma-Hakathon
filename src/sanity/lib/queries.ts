import {groq} from "next-sanity";

export const allProducts = groq `*[_type == "product"]`;
export const four = groq`*[_type == "product" && _id in ["UBjkx5HPklxwS3fxm9vr2z", "UBjkx5HPklxwS3fxm9vrn7", "UBjkx5HPklxwS3fxm9vuqF", "dGVzOG5n3gpmBdkFnI5guD"]]`
export const six = groq `*[_type == "product" && _id in ["UBjkx5HPklxwS3fxm9vtnf", "Xnu7bzr1b8hUrTQtnWaJai", "dGVzOG5n3gpmBdkFnI5guD", "Xnu7bzr1b8hUrTQtnWaJk3", "dGVzOG5n3gpmBdkFnI5fu7", "UBjkx5HPklxwS3fxm9vpmZ"]]`
export const trending = groq `*[_type == "product" && _id in ["Xnu7bzr1b8hUrTQtnWaJI2"]]`
export const query = groq `*[_type == "product" && _id in ["dGVzOG5n3gpmBdkFnI5hmr", "UBjkx5HPklxwS3fxm9vuqF", "Xnu7bzr1b8hUrTQtnWaJ5a", "dGVzOG5n3gpmBdkFnI5fu7"]]`
export const three = groq `*[_type == "product" && _id in ["dGVzOG5n3gpmBdkFnI5fhh", "UBjkx5HPklxwS3fxm9vrn7", "Xnu7bzr1b8hUrTQtnWaJtO"]]`
export const one = groq `*[_type == "product" && _id in ["Xnu7bzr1b8hUrTQtnWaImu"]]`
export const category = groq `*[_type == "product" && _id in ["dGVzOG5n3gpmBdkFnI5f3x", "dGVzOG5n3gpmBdkFnI5guD", "dGVzOG5n3gpmBdkFnI5hmr", "UBjkx5HPklxwS3fxm9vr2z"]]`



