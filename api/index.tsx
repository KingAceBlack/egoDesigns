import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'





// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }




export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  imageAspectRatio: '1:1',  // Semicolon added here
  title: 'BaseDesigners',


});


let player = {
  name: 'player',
  points: 0,


};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



app.frame('/', (c) => {
    let image;
    let intents;
    
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmYRrrbdDwVCWGbMM8nQtpMHrKWg3JCgMREYQYJwxULudy';
        
        intents = [
           
            <Button action="/page1">Play</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});





app.frame('/page1', async (c) => {
    let image;
    let intents;
    const { buttonValue, inputText, status, frameData, verified } = c;
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmaPuRwVyXiknsFYcj6jvFTtDKDkThf4ikoFRQmBTYr1Bz/1.jpg';
        
        intents = [
           
            <Button value="FALSE">A</Button>, 
            <Button value="CORRECT">B</Button>, 
        ];


    return c.res({
       
        image: image,
        intents: intents,
        action: '/page2',
    });
});


app.frame('/page2', async (c) => {
    let image;
    let intents;
    const { buttonValue, inputText, status, frameData, verified } = c;


    if (buttonValue === "CORRECT") {

      console.log(buttonValue);
      player.points += 1;

    } else {

    }
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmaPuRwVyXiknsFYcj6jvFTtDKDkThf4ikoFRQmBTYr1Bz/4.jpg';
        
        intents = [
           
            <Button value="CORRECT">A</Button>, 
            <Button value="FALSE">B</Button>,  
        ];


    return c.res({
       
        image: image,
        intents: intents,
        action: '/page3',
    });
});



app.frame('/page3', async (c) => {
    let image;
    let intents;
    const { buttonValue, inputText, status, frameData, verified } = c;

    if (buttonValue === "CORRECT") {

      console.log(buttonValue);
      player.points += 1;

    } else {

    }
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmaPuRwVyXiknsFYcj6jvFTtDKDkThf4ikoFRQmBTYr1Bz/5.jpg';
        
        intents = [
           
            <Button value="CORRECT">A</Button>, 
            <Button value="FALSE">B</Button>, 
        ];


    return c.res({
       
        image: image,
        intents: intents,
        action: '/page4',
    });
});




app.frame('/page4', async (c) => {
    let image;
    let intents;
    const { buttonValue, inputText, status, frameData, verified } = c;

    if (buttonValue === "CORRECT") {

      console.log(buttonValue);
      player.points += 1;

    } else {

    }
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmaPuRwVyXiknsFYcj6jvFTtDKDkThf4ikoFRQmBTYr1Bz/2.jpg';
        
        intents = [
           
            <Button value="FALSE">A</Button>, 
            <Button value="CORRECT">B</Button>,  
        ];


    return c.res({
       
        image: image,
        intents: intents,
        action: '/page5',
    });
});




app.frame('/page5', async (c) => {
    let image;
    let intents;
    const { buttonValue, inputText, status, frameData, verified } = c;

    if (buttonValue === "CORRECT") {

      console.log(buttonValue);
      player.points += 1;

    } else {

    }
        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmaPuRwVyXiknsFYcj6jvFTtDKDkThf4ikoFRQmBTYr1Bz/3.jpg';
        
        intents = [
           
            <Button value="FALSE">A</Button>, 
            <Button value="CORRECT">B</Button>,  
        ];


    return c.res({
       
        image: image,
        intents: intents,
        action: '/page6',
    });
});




app.frame('/page6', async (c) => {
    let image;
    let intents;
    const { buttonValue, inputText, status, frameData, verified } = c;

    if (buttonValue === "CORRECT") {

      console.log(buttonValue);
      player.points += 1;

    } else {

    }

        
        image = 'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmaPuRwVyXiknsFYcj6jvFTtDKDkThf4ikoFRQmBTYr1Bz/6.jpg';
        
        intents = [
           
            <Button value="FALSE">A</Button>, 
            <Button value="CORRECT">B</Button>,  
        ];


    return c.res({
       
        image: image,
        intents: intents,
        action: '/win',
    });
});




app.frame('/win', async (c) => {
    let image;
    let intents;
    const { buttonValue, inputText, status, frameData, verified } = c;
        
     
      image = (
        <div
            style={{
                position: 'relative',  // Set the container to relative positioning
                height: '100vh',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                src= {'https://copper-immediate-mongoose-351.mypinata.cloud/ipfs/QmPM37p5mK3zVGshuEqNByq5r89qdDHsTVQvBLihJxK5dr'}
                alt="First Image"
                style={{
                    width: '1200px',
                    height: '650px',
                }}
            />



            <p
                style={{
                    position: 'absolute',
                    fontSize: '40px',
                    margin: '0',
                    color: 'white',
                    top: '10%',  // Center it vertically
                    left: '50%', // Center it horizontally
                    transform: 'translateX(-50%)',  // Center text horizontally
                }}
            >
                {`CONGRATULATIONS !!`}
            </p>

            <p
                style={{
                    position: 'absolute',
                    fontSize: '30px',
                    margin: '0',
                    color: 'white',
                    top: '25%',  // Center it vertically
                    left: '50%', // Center it horizontally
                    transform: 'translateX(-50%)',  // Center text horizontally
                }}
            >
                {`You got ${player.points} points`}
            </p>




        </div>
    );
        intents = [
           
            <Button action="/">Play Again</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});




//////////////////////////////////////////////////////////////////////////












// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
