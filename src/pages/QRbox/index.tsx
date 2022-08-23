import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

export function QRbox (){

    const [link, setLink] = useState('')
    const [qrcodeLink, setQrcodeLink] = useState('')
    
    function handleGenerate(link_url:string){
        QRCodeLink.toDataURL(link_url,{
          width: 600,
          margin: 3,
        }, function (err, url){
          setQrcodeLink(url);
        })
      }
    
      function handleQrcode(e:any){
        setLink(e.target.value);
        handleGenerate(e.target.value);
      }
      function downloadLink(){
        const linkCreate = document.createElement('a');
        linkCreate.href = qrcodeLink;
        linkCreate.download = 'qrcode.png';
        linkCreate.click();
      }
      function showQRCode(){
        const qrcode = document.getElementById('link');
        
       
      }

    return(
        <div className="container">

      <h1>Gerador QR Code Online</h1>

      <QRCode 
      value={link} 
      size={200}
      level="H"
      />

      <input 
        className='input-qrcode' 
        type="text" 
        placeholder='Gere seu link....'
        value={link}  
        onChange={ (e) => handleQrcode(e)}
      />
      <button className="btn-download" onClick={downloadLink}>Clique para baixar o QRCode</button>

    <p>Feito com amor por Diniz Dev </p>
  
   </div>
    )
}