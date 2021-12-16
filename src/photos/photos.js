export const photos ={
    namespaced: true,
    state(){
        return{
            all:[],
            cache:{}
        }
    },
    mutations:{
        setPhotosForCurrentAlbums(state,{photos,albumId}){
            state.all=photos
            state.cache[albumId]=photos

        }
    },
    actions:{
        async getByAlbums(ctx, {albumId}){
            if(ctx.state.cache[albumId]){
                ctx.commit('setPhotosForCurrentAlbums',{photos: ctx.state.cache[albumId] ,albumId})
                return
            }
            const res = await window.fetch(
                `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
              );
              const json = await res.json();
            ctx.commit('setPhotosForCurrentAlbums',{photos: json ,albumId})
        }
    }
}