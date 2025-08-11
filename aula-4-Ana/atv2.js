//  Crie uma funcao chamada enviarEmail(destinatario)que:
// use async
// simule o tempo de envio com setTimeout dentro de uma Promise (ex: 2 segundos)
// mostre no console: 
// enviando e-mail para [destinatario]


async function enviarEmail(destinatario) {
    console.log(`Enviando e-mail para ${destinatario}...`)
    await esperar();
    console.log('Finalizado')
}

function esperar() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Enviado com sucesso');
        }, 2000);
    })
}
enviarEmail("oliver@gmail.com")