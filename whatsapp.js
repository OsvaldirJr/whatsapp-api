import WhatsApp from 'whatsapp';



async function send_message(recipients, message)
{
    // Your test sender phone number
    const wa = new WhatsApp( 555199999999 );

    // Enter the recipient phone number
    await recipients.forEach(async () => {
        try{
            const sent_text_message = wa.messages.text( { "body" : message }, number );

            await sent_text_message.then( ( res ) =>
            {
                console.log( res.rawResponse() );
            } );
        }
        catch( e )
        {
            console.log( JSON.stringify( e ) );
        }
    });
    
}

send_message();


