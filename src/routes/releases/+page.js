import PocketBase from 'pocketbase';


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    
   
    const pb = new PocketBase('https://h2998444.stratoserver.net:8443');
    const record = await pb.collection('releases').getFullList()
    record.forEach(item => {
        item.imageUrl = pb.getFileUrl(item,item.cover)
    })
    
    return {
        releases:record.reverse()
        
    }
  }