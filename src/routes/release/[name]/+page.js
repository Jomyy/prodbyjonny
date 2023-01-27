import PocketBase from 'pocketbase';
import { page } from '$app/stores'


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    
   
    const pb = new PocketBase('http://h2998444.stratoserver.net:80');
    const record = await pb.collection('releases').getFirstListItem('camelcaseName=' + '"' + params.name +'"' , {})
   
   
    return {
      post: {
        releaseData:await pb.collection('releases').getFirstListItem('camelcaseName=' + '"' + params.name +'"' , {}),
        imageUrl:pb.getFileUrl(record,record.cover)
       
      }
        
    }
  }