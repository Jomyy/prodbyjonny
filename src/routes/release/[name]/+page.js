
import PocketBase from 'pocketbase';



/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const pb = new PocketBase('https://h2998444.stratoserver.net:8443');
    const record = await pb.collection('releases').getFirstListItem('camelcaseName=' + '"' + params.name +'"' , {})
   
    return {
      post: {
        releaseData:await pb.collection('releases').getFirstListItem('camelcaseName=' + '"' + params.name +'"' , {}),
        imageUrl:pb.getFileUrl(record,record.cover)
       
      }
        
    }
  }