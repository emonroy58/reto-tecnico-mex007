let bands = document.getElementById('title-band');
let cadena=[];
let cadenaDos=[];
let index;
let tem,tem2, tem3;
let i=0, j=0;

const bandstitle = ()=>{
    fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then(res => res.json())
    .then(data =>{
         
     for(i=0; i<data.length; i++) /*excluye de cada elemnto los articulos The, An , A y los agrega en array nuevo*/
       {
        tem= data[i].startsWith("The ")
        tem2= data[i].startsWith("An ")
        tem3= data[i].startsWith("A ")   

            if(tem === true )
                {        
                tem = data[i].slice(4)
                cadena.push(tem)
                }  
                    else if(tem2===true )
                    {        
                    tem2 = data[i].slice(3)
                    cadena.push(tem2)
                    }    
         
                else if(tem3===true)
                {        
                tem3 = data[i].slice(2)
                             
                cadena.push(tem3)
                }  
        else{

            cadena.push(data[i])  
        }
        console.log(cadena);
        
    }  
        
       for(i=0; i<cadena.length; i++)/*Ordena nuevo array*/
            {
                for(j=i+1; j<cadena.length;j++){
                        if(cadena[i]>cadena[j])
                        {
                            tempCadena=cadena[i]; 
                            cadena[i]=cadena[j];
                            cadena[j]=tempCadena;
                        }
                }

            }   
            console.log(cadena);

        for (i=0; i<cadena.length; i++){/*regresa textos originales al array*/
           tem= cadena[i].slice(-3);              
            for(j=0; j<data.length;j++){  
                tem2 = data[j].slice(-3);
                if(tem===tem2){

                    cadenaDos.push(data[j])
                }
                
            }      
        }    
        console.log(cadenaDos);
                
        
           bands.innerHTML =''; /*muestra array ordenado con textos originales en pantalla*/
        for(let i in cadenaDos){
            bands.innerHTML+=`
            
            <tr>
             <td>${cadenaDos[i]}</td>
            </tr><br></br>
            `
        }       
    })
}
 bandstitle();

