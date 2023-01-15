<svelte:head>
    <title>Home</title>
</svelte:head>
<div>
    <img src="portrait.jpg" alt="Portrtait" id="portrait">
    <section> 
    Jonny is a self-produced artist from Münster, Germany with heavy influences from the 80s New Wave and the German "Neue Deutsche Welle" movement. He also uses elements from various more modern styles. In his music, Jonny merges these styles to create a mix between old and new. His first single was released in early 2022 and he has released numerous singles since then.
    </section>
</div>

<style>
    @font-face {
        font-family: 'Poppins';
        src: url('/fonts/PoppinsSemiBold.ttf') format("truetype");
    }
    @font-face {
        font-family: 'PoppinsLight';
        src: url('/fonts/PoppinsLight.ttf') format("truetype");
    }
    section{
        font-family: PoppinsLight;
        color: #f3f3f3;
        width: 30vw;
        text-align: center;
        
    }
    #portrait{
       width:30vw;
        aspect-ratio: 3/4;
        
        border-radius: 10px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.321);
    }
    div{
        height: calc(100vh - 110px);
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        
        
      
      
       
    }
    @media only screen and (max-width: 870px) {
       div{
       
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: fit-content;
        margin-top: 40px;
        margin-bottom: 40px;
        
       }
       section{
        margin-top: 10px;
        width: 70vw;
       
       }
       #portrait{
        height: 50vh;
        width: auto;
        margin-top: 0px;
        margin: 0px;
       }
    }
</style>